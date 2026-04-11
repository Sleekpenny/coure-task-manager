import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../../ui/header/header.component';
import { SideBarComponent } from '../../ui/side-bar/side-bar.component';
import { NavItem, navItems } from '@app/core';
import { IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  standalone: true,
  imports: [IonRouterOutlet, HeaderComponent, SideBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {

  navItems: NavItem[] = navItems; 

}
