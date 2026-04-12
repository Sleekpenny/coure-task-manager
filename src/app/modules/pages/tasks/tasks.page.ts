import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { FullTask, taskLists } from '@app/core';
import { PageContentComponent } from "@app/shared/components/layouts/page-content/page-content.component";
import { ContainerComponent } from "@app/shared/components";
import { TaskHeaderComponent } from "@app/modules/components/task-header/task-header.component";
import { ComponentServices } from '@app/shared/services';
import { CreateTaskComponent } from '@app/modules/components/create-task/create-task.component';
import { TaskListsComponent } from "@app/modules/components/task-lists/task-lists.component";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, PageContentComponent, ContainerComponent, TaskHeaderComponent, IonButton, TaskListsComponent],
})
export class TasksPage {
  activeFilter = 'All';
  activePriority = 'All';
  filters = ['All', 'In Progress', 'Completed', 'Not Started', 'Overdue'];

  tasks: FullTask[] = taskLists;

  constructor(private component: ComponentServices) {}

  get filteredTasks(): FullTask[] {
    return this.tasks.filter(t =>
      (this.activeFilter === 'All' || t.status === this.activeFilter) &&
      (this.activePriority === 'All' || t.priority === this.activePriority)
    );
  }

  setFilter(f: string): void {
    this.activeFilter = f;
  }

  setPriority(p: string): void {
    this.activePriority = p;
  }

  openModal(): void {
    this.component.presentModal(CreateTaskComponent, '');
  }

  editTask(task: FullTask): void {}
  deleteTask(task: FullTask): void {}
}