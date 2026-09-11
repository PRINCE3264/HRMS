import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from './initials.pipe';
import { RoleLabelPipe } from './role-label.pipe';
import { StatusLabelPipe } from './status-label.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [InitialsPipe, RoleLabelPipe, StatusLabelPipe, TruncatePipe],
  imports: [CommonModule],
  exports: [InitialsPipe, RoleLabelPipe, StatusLabelPipe, TruncatePipe]
})
export class PipesModule {}
