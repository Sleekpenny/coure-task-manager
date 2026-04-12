import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContainerComponent } from "../container/container.component";
import { cardProps, TaskCardUser } from '@app/core';
import { NgClass, TitleCasePipe } from '@angular/common';
import { IonIcon, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, ContainerComponent, TitleCasePipe, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

  @Input() card!: cardProps
 
  get initials(): (user: TaskCardUser) => string {
    return (user: TaskCardUser) =>
      user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
  

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

}
