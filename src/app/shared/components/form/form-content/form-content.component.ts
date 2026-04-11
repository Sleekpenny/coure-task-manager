import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormEnum } from '@app/core';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContentComponent implements OnInit {

  @Input() type!: FormEnum;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() color!: string;
  @Input() disable!: boolean;
  @Input() value: any;
  @Output() ngModel = new EventEmitter<any>();
  @Input() selectOptions: any;

  @Input() minValue: any;
  @Input() maxValue: any;
  @Input() minimum: any;
  @Input() maximum: any;


  constructor() { }

  ngOnInit() { }

  ngModelMethod(value: any) {
    this.ngModel.emit(value);
  }
}
