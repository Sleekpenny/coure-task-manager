import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { FullTask, tasks, TaskServices } from '@app/core';
import { PageContentComponent } from "@app/shared/components/layouts/page-content/page-content.component";
import { HeaderComponent } from "@app/shared/components/ui/header/header.component";
import { AdTasksComponent } from "@app/modules/components/ad-tasks/ad-tasks.component";
import { TaskCardComponent } from "@app/modules/components/task-card/task-card.component";
import { HeaderTitleComponent } from "@app/modules/components/header-title/header-title.component";
import { CreateTaskComponent } from "@app/modules/components/create-task/create-task.component";
import { ComponentServices } from '@app/shared/services';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, AsyncPipe, PageContentComponent, HeaderComponent, AdTasksComponent, TaskCardComponent, HeaderTitleComponent, CreateTaskComponent],
  standalone:true
})
export class HomePage implements OnInit {

  activeTab = 'Today';
  tabs = ['Today', 'This Week', 'This Month', 'Reports'];
  tasks = tasks;
  userTasks$!: Observable<FullTask[]>;

  constructor(private component: ComponentServices,  private taskService: TaskServices) {}
  
  ngOnInit() {
    this.userTasks$ = this.taskService.tasks;
  }

  toggleTask(task: any): void {
    task.done = !task.done;
  } 

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  createTask() {
    this.component.presentModal(CreateTaskComponent,'')
  }

}
