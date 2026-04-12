import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBarComponent } from '../../ui/side-bar/side-bar.component';
import { NavItem, navItems } from '@app/core';
import { IonRouterOutlet } from "@ionic/angular/standalone";
import { PageContentComponent } from "../page-content/page-content.component";

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  standalone: true,
  imports: [IonRouterOutlet, SideBarComponent, PageContentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {



  navItems: NavItem[] = navItems; 


}
