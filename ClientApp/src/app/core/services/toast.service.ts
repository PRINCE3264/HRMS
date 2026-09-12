import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastMixin = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  show(message: string, type: Toast['type'] = 'info', duration = 3500): void {
    this.toastMixin.fire({
      icon: type,
      title: message,
      timer: duration
    });
  }

  success(message: string): void {
    this.show(message, 'success');
  }

  error(message: string, duration = 5000): void {
    this.show(message, 'error', duration);
  }

  warning(message: string): void {
    this.show(message, 'warning');
  }

  info(message: string): void {
    this.show(message, 'info');
  }

  /**
   * Confirmation Popup using SweetAlert2
   */
  async confirm(
    title: string,
    text: string = '',
    confirmButtonText: string = 'Yes, proceed',
    cancelButtonText: string = 'Cancel',
    icon: SweetAlertIcon = 'warning'
  ): Promise<boolean> {
    const result = await Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#94a3b8',
      reverseButtons: true
    });
    return result.isConfirmed;
  }

  /**
   * Alert Popup using SweetAlert2
   */
  async alert(title: string, text: string = '', icon: SweetAlertIcon = 'info'): Promise<void> {
    await Swal.fire({
      title,
      text,
      icon,
      confirmButtonColor: '#6366f1'
    });
  }

  /**
   * Generic SweetAlert2 modal trigger
   */
  fire(options: SweetAlertOptions) {
    return Swal.fire(options);
  }
}

