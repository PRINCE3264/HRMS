import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from '../../../core/interceptors/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
  isLoading = false;
  private sub!: Subscription;

  constructor(
    public loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub = this.loadingService.loading$.subscribe(loading => {
      this.isLoading = loading;
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
