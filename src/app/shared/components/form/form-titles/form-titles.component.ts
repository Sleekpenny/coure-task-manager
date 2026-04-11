import { Component, Input, OnInit } from '@angular/core';
import { IonLabel, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-form-titles',
  templateUrl: './form-titles.component.html',
  styleUrls: ['./form-titles.component.scss'],
  standalone: true,
  imports: [IonText, IonLabel]
})
export class FormTitlesComponent  implements OnInit {

  @Input() headerTitle!: string;
  @Input() subTitle!: string;

  constructor() { }

  ngOnInit() {}

}
