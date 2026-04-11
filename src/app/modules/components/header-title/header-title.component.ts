import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTitleComponent  implements OnInit {
  @Input() title!:string;
  @Input() subTitle!:string;
  @Input() btnText!:string;
  @Input() icon!:string;

  @Output() create = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

}
