import { Component, Input } from '@angular/core';
import { ReportingNode } from '../../../../core/models';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {
  @Input() node!: ReportingNode;
  expanded = true;

  toggle(): void {
    this.expanded = !this.expanded;
  }
}