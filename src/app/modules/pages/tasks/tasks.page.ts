import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonIcon } from '@ionic/angular/standalone';
import { FullTask } from '@app/core';
import { PageContentComponent } from "@app/shared/components/layouts/page-content/page-content.component";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent,  CommonModule, FormsModule, PageContentComponent]
})
export class TasksPage {

  activeFilter = 'All';
  filters = ['All', 'In Progress', 'Completed', 'Not Started', 'Overdue'];
 
  tasks: FullTask[] = [
    {
      id: 1,
      title: 'BrightBridge - Website Design',
      project: 'BrightBridge',
      projectColor: '#ef4444',
      assignee: 'John Smith',
      initials: 'JS',
      avatarColor: 'linear-gradient(135deg,#6366f1 0%,#818cf8 100%)',
      dueDate: 'Apr 15, 2026',
      priority: 'High',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Github - Upload Dev Files & Images',
      project: 'SaaS Platform',
      projectColor: '#111827',
      assignee: 'Alice Wong',
      initials: 'AW',
      avatarColor: 'linear-gradient(135deg,#10b981 0%,#34d399 100%)',
      dueDate: 'Apr 12, 2026',
      priority: 'Medium',
      status: 'Not Started',
    },
    {
      id: 3,
      title: '9TDesign - Mobile App Prototype',
      project: '9TDesign',
      projectColor: '#f59e0b',
      assignee: 'Marcus Lee',
      initials: 'ML',
      avatarColor: 'linear-gradient(135deg,#f59e0b 0%,#fbbf24 100%)',
      dueDate: 'Apr 10, 2026',
      priority: 'High',
      status: 'Overdue',
    },
    {
      id: 4,
      title: 'Horizon - Dashboard Design',
      project: 'Horizon',
      projectColor: '#6366f1',
      assignee: 'Sarah Chen',
      initials: 'SC',
      avatarColor: 'linear-gradient(135deg,#a78bfa 0%,#6366f1 100%)',
      dueDate: 'Apr 20, 2026',
      priority: 'Low',
      status: 'Completed',
    },
    {
      id: 5,
      title: 'Mobile App UI Review',
      project: 'AppReview',
      projectColor: '#3b82f6',
      assignee: 'David Park',
      initials: 'DP',
      avatarColor: 'linear-gradient(135deg,#3b82f6 0%,#60a5fa 100%)',
      dueDate: 'Apr 18, 2026',
      priority: 'Medium',
      status: 'In Progress',
    },
    {
      id: 6,
      title: 'Branding Assets Compilation',
      project: 'BrandKit',
      projectColor: '#ec4899',
      assignee: 'Nina Osei',
      initials: 'NO',
      avatarColor: 'linear-gradient(135deg,#ec4899 0%,#f472b6 100%)',
      dueDate: 'Apr 25, 2026',
      priority: 'Low',
      status: 'Not Started',
    },
  ];
 
  get filteredTasks(): FullTask[] {
    if (this.activeFilter === 'All') return this.tasks;
    return this.tasks.filter((t) => t.status === this.activeFilter);
  }
 
  setFilter(f: string): void {
    this.activeFilter = f;
  }
 
  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      'In Progress': 'badge--in-progress',
      Completed: 'badge--completed',
      'Not Started': 'badge--not-started',
      Overdue: 'badge--overdue',
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
