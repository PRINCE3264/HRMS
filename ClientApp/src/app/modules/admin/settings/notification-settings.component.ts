import { Component, OnInit } from '@angular/core';
import { SystemConfigService } from '../../../core/services/system-config.service';
import { ToastService } from '../../../core/services/toast.service';
import { NotificationPreference } from '../../../core/models';

@Component({
  selector: 'app-admin-notification-settings',
  templateUrl: './notification-settings.component.html',
  styleUrls: ['./notification-settings.component.scss']
})
export class AdminNotificationSettingsComponent implements OnInit {
  preferences: NotificationPreference[] = [];
  loading = false;
  savingId: string | null = null;

  constructor(private configService: SystemConfigService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadPreferences();
  }

  loadPreferences(): void {
    this.loading = true;
    this.configService.getNotificationPreferences().subscribe({
      next: (data) => { this.preferences = data; this.loading = false; },
      error: () => { this.loading = false; this.toast.error('Failed to load notification preferences'); }
    });
  }

  toggle(pref: NotificationPreference, channel: 'emailEnabled' | 'smsEnabled' | 'inAppEnabled'): void {
    const updated = { ...pref, [channel]: !pref[channel] };
    this.savingId = pref.id;
    this.configService.updateNotificationPreference(pref.id, {
      emailEnabled: updated.emailEnabled,
      smsEnabled: updated.smsEnabled,
      inAppEnabled: updated.inAppEnabled
    }).subscribe({
      next: (res) => {
        const idx = this.preferences.findIndex(p => p.id === pref.id);
        if (idx > -1) this.preferences[idx] = res;
        this.savingId = null;
      },
      error: () => { this.savingId = null; this.toast.error('Failed to update preference'); }
    });
  }

  pretty(eventName: string): string {
    return eventName.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  }
}