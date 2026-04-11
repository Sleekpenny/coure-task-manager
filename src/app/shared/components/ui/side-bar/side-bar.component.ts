import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItem } from '@app/core';
import { IonIcon, IonRouterOutlet } from '@ionic/angular/standalone';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports: [RouterLink, IonIcon,  IonRouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent  implements OnInit {

 @Input() navItems!: NavItem[]; 
  constructor() { }

  ngOnInit() {}

}
