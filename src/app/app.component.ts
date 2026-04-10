import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FullLoaderComponent } from './shared/components/ui/loaders/full-loader/full-loader.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, FullLoaderComponent],
  standalone: true,
})
export class AppComponent {

  showsplash: boolean = true;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.showsplash = false;
    }, 2000);
  }
}
