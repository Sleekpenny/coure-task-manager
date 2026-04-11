import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { tasks, userTasks } from '@app/core';
import { NgClass } from '@angular/common';
import { PageContentComponent } from "@app/shared/components/layouts/page-content/page-content.component";
import { HeaderComponent } from "@app/shared/components/ui/header/header.component";
import { AdTasksComponent } from "@app/modules/components/ad-tasks/ad-tasks.component";
import { TaskCardComponent } from "@app/modules/components/task-card/task-card.component";
import { HeaderTitleComponent } from "@app/modules/components/header-title/header-title.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, PageContentComponent, HeaderComponent, AdTasksComponent, TaskCardComponent, HeaderTitleComponent],
  standalone:true
})
export class HomePage {
  activeTab = 'Today';
  tabs = ['Today', 'This Week', 'This Month', 'Reports'];
 
  tasks = tasks;
  userTasks = userTasks;
  constructor() {}

  toggleTask(task: any): void {
    task.done = !task.done;
  }
 
  setTab(tab: string): void {
    this.activeTab = tab;
  }

}
