import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FullLoaderComponent } from './shared/components/ui/loaders/full-loader/full-loader.component';
import { addIcons } from 'ionicons';
import * as ionIcons from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, FullLoaderComponent],
  standalone: true,
})
export class AppComponent {

  showSplash = true;
  splashHiding = false;
  
  constructor() {
    addIcons(ionIcons);
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.splashHiding = true;
      setTimeout(() => {
        this.showSplash = false;
      }, 300);
    }, 1500);
  }
}
