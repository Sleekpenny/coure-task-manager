import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AdCard } from '@app/core';
import { IonIcon } from "@ionic/angular/standalone";


@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss'],
  standalone: true,
  imports: [IonIcon, ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdCardComponent  implements OnInit {

  @Input() card!: AdCard;
  @Input() done: boolean = false;
  constructor() { }

  ngOnInit() {}

}
