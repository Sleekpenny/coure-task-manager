import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../../ui/header/header.component';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { SideBarComponent } from '../../ui/side-bar/side-bar.component';
import { NavItem, navItems } from '@app/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  standalone: true,
  imports: [HeaderComponent, IonRouterOutlet, SideBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {

  navItems: NavItem[] = navItems; 

}
