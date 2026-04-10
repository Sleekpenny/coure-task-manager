import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../../ui/header/header.component';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  standalone: true,
  imports: [HeaderComponent, IonRouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {


  // toggleSidebar () {
  //   this.isSidebarOpen = !this.isSidebarOpen;
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize = ({ target }: Event) => { if ((target as Window).innerWidth >= 1024) this.isSidebarOpen = false; };


}
