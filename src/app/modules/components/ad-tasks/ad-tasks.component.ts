import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonIcon, IonButton, IonLabel } from "@ionic/angular/standalone";
import { ContainerComponent } from "../../../shared/components/ui/container/container.component";
import { AdCardComponent } from "@app/shared/components";
import { AdCard } from '@app/core';

@Component({
  selector: 'app-ad-tasks',
  templateUrl: './ad-tasks.component.html',
  styleUrls: ['./ad-tasks.component.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonIcon, ContainerComponent, AdCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdTasksComponent{
  @Input() tasks!:AdCard[];
  @Output() toggleTask = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

}
