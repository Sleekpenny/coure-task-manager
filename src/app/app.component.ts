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
    // Step 1: after 2s, trigger the fade-out animation
    setTimeout(() => {
      this.splashHiding = true;
 
      // Step 2: once animation (300ms) finishes, remove from DOM
      setTimeout(() => {
        this.showSplash = false;
      }, 300);
    }, 2000);
  }
}
