import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormEnum } from '../../../enums';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, EditorComponent],
})
export class FormContentComponent implements OnInit {

  @Input() type: FormEnum;
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() color: string;
  @Input() checked: boolean;
  @Input() checkbox: boolean;
  @Input() disable: boolean;
  @Input() value: any;
  @Output() ngModel = new EventEmitter<any>();
  @Input() selectOptions: any;
  @Input() optionKey: string;
  @Input() optionValue: string;
  @Input() minValue: any;
  @Input() maxValue: any;
  @Input() minimum: any;
  @Input() maximum: any;

  textEditorValue: string;
  init: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount',
    menubar: false,
    toolbar: 'undo redo | fontsize styles | bold underline italic | alignleft aligncenter alignright alignjustify | bullist numlist | table tabledelete',
    skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
    content_css: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'),
    outputFormat: 'html'
  };

  constructor() { }

  ngOnInit() { }

  ngModelMethod(value: any) {
    this.ngModel.emit(value);
  }
}
