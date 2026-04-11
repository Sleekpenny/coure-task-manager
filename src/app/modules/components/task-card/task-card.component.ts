import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { cardProps } from '@app/core';
import { CardComponent } from "@app/shared/components";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  standalone: true,
  imports: [ CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent  implements OnInit {

  @Input() tasks!: cardProps[];

  constructor() { }

  ngOnInit() {}

}
