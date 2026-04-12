import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { FullTask, TaskServices } from '@app/core';
import { PageContentComponent } from "@app/shared/components/layouts/page-content/page-content.component";
import { ContainerComponent } from "@app/shared/components";
import { TaskHeaderComponent } from "@app/modules/components/task-header/task-header.component";
import { ComponentServices } from '@app/shared/services';
import { CreateTaskComponent } from '@app/modules/components/create-task/create-task.component';
import { TaskListsComponent } from "@app/modules/components/task-lists/task-lists.component";
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, PageContentComponent, ContainerComponent, TaskHeaderComponent, IonButton, TaskListsComponent],
})
export class TasksPage {
  filters = ['All', 'In Progress', 'Completed', 'Not Started', 'Overdue'];
  priorityFiltering = ['All', 'High', 'Medium', 'Low']
 
  private activeFilter$ = new BehaviorSubject<string>('All');
  private activePriority$ = new BehaviorSubject<string>('All');
 
  activeFilter = 'All';
  activePriority = 'All';
 
  filteredTasks$: Observable<FullTask[]> = combineLatest([
    this.taskService.tasks,
    this.activeFilter$,
    this.activePriority$,
  ]).pipe(
    map(([tasks, status, priority]) =>
      tasks.filter((t:FullTask) =>
        (status === 'All' || t.status === status) &&
        (priority === 'All' || t.priority === priority)
      )
    )
  );
 
  constructor(
    private taskService: TaskServices,
    private component: ComponentServices,
  ) {}
 
  setFilter(f: string): void {
    this.activeFilter = f;
    this.activeFilter$.next(f);
  }
 
  setPriority(p: string): void {
    this.activePriority = p;
    this.activePriority$.next(p);
  }
 
  openModal(): void {
    this.component.presentModal(CreateTaskComponent, '');
  }
 
  async editTask(task: FullTask): Promise<void> {
    await this.component.presentModal(CreateTaskComponent, { task });
  }
 
  async deleteTask(task: FullTask): Promise<void> {
    const confirmed = await this.component.presentConfirmAlert(
      'Delete Task?',
      'You are about to delete a task. Are you sure?',
      '',
      { actionText: 'Delete', cancelText: 'Cancel' }
    );
 
    if (confirmed === 'confirm') {
      this.taskService.delete(task.id);
    }
  }
}