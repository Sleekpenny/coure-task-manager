import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormEnum } from '@app/core';
import { FormContentComponent, FormContentGroupComponent, FormTitlesComponent } from '@app/shared/components';
import { FormHandler } from '@app/shared/services/form-handler';
import { IonButton, IonLabel, ModalController, ToastController } from "@ionic/angular/standalone";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonLabel, FormContentComponent, FormContentGroupComponent, FormTitlesComponent, IonButton]
})
export class CreateTaskComponent  implements OnInit {

  selectOptions= ['Low', 'Meduim', 'High'];
  isLoading: boolean = false

  formEnum = {
    textarea: FormEnum.Textarea,
    select: FormEnum.Select,
    date: FormEnum.date
  }

  formData = {
    date: {
      value: '',
      required: true,
    },
    title: {
      value: '',
      required: true,
    },
    piority: {
      value: '',
      required: true,
    },
    desc: {
      value: '',
      required: true,
    },
  }
  constructor(private formHanlder: FormHandler, private modalController: ModalController, private toastController: ToastController) { }

  ngOnInit() {}

  async submit() {

    try{
      this.isLoading = await true;
      const validatedFormData = this.formHanlder.validateForm(this.formData);
      if (!validatedFormData) return;
      console.log(this.formData);
      await this.modalController.dismiss();

    } catch(e) {
      this.toastController.create();
    }
  }

}
