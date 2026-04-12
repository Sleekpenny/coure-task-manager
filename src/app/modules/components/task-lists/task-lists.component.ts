import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonIcon, IonLabel, IonButton } from "@ionic/angular/standalone";
import { ContainerComponent } from "@app/shared/components";
import { FullTask } from '@app/core';
import { NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, UpperCasePipe, ContainerComponent, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListsComponent implements OnInit {
  @Input() filteredTasks!: FullTask[];

  @Output() deleteTask = new EventEmitter<FullTask>();
  @Output() editTask = new EventEmitter<FullTask>();

  expandedTaskId!:string;

  constructor() {}

  ngOnInit() {}

  toggleExpand(id: string): void {
    this.expandedTaskId = this.expandedTaskId === id ? '' : id;
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      'In Progress': 'badge--in-progress',
      'Completed': 'badge--completed',
      'Not Started': 'badge--not-started',
      'Overdue': 'badge--overdue',
    };
    return map[status] || '';
  }

  getPriorityColor(p: string): string {
    const map: Record<string, string> = {
      High: '#ef4444',
      Medium: '#f59e0b',
      Low: '#10b981',
    };
    return map[p] || '#9ca3af';
  }
}