import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonIcon, IonLabel, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonIcon ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent  implements OnInit {
  @Input() tabs!: string[]
  @Input() activeTab!: string
  @Output() setTab = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {}

}
