import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContainerComponent } from "../container/container.component";
import { cardProps, TaskCardUser } from '@app/core';
import { NgClass, TitleCasePipe } from '@angular/common';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonIcon, ContainerComponent, TitleCasePipe, NgClass],
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

}
