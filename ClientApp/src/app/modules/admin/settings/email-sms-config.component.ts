import { Component, OnInit } from '@angular/core';
import { SystemConfigService } from '../../../core/services/system-config.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-admin-email-sms-config',
  templateUrl: './email-sms-config.component.html',
  styleUrls: ['./email-sms-config.component.scss']
})
export class AdminEmailSmsConfigComponent implements OnInit {
  email = {
    smtpHost: '',
    smtpPort: '',
    smtpUsername: '',
    smtpPassword: '',
    smtpFrom: ''
  };
  sms = {
    apiUrl: '',
    apiKey: '',
    senderId: ''
  };
  saving = false;

  constructor(private configService: SystemConfigService, private toast: ToastService) {}

  ngOnInit(): void {
    this.configService.getEmailSmsConfig().subscribe({
      next: (data) => {
        const map: Record<string, string> = data.settings || {};
        this.email.smtpHost = map['SMTP_HOST'] || '';
        this.email.smtpPort = map['SMTP_PORT'] || '';
        this.email.smtpUsername = map['SMTP_USERNAME'] || '';
        this.email.smtpPassword = map['SMTP_PASSWORD'] || '';
        this.email.smtpFrom = map['SMTP_FROM'] || '';
        this.sms.apiUrl = map['SMS_API_URL'] || '';
        this.sms.apiKey = map['SMS_API_KEY'] || '';
        this.sms.senderId = map['SMS_SENDER_ID'] || '';
      },
      error: () => this.toast.error('Failed to load email/SMS configuration')
    });
  }

  save(): void {
    this.saving = true;
    this.configService.saveEmailSmsConfig({
      SMTP_HOST: this.email.smtpHost,
      SMTP_PORT: this.email.smtpPort,
      SMTP_USERNAME: this.email.smtpUsername,
      SMTP_PASSWORD: this.email.smtpPassword,
      SMTP_FROM: this.email.smtpFrom,
      SMS_API_URL: this.sms.apiUrl,
      SMS_API_KEY: this.sms.apiKey,
      SMS_SENDER_ID: this.sms.senderId
    }).subscribe({
      next: () => { this.saving = false; this.toast.success('Email/SMS configuration saved'); },
      error: () => { this.saving = false; this.toast.error('Failed to save configuration'); }
    });
  }
}