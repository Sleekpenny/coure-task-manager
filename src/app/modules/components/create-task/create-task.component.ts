import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormEnum, FullTask, TaskServices } from '@app/core';
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
  @Input() task?: FullTask;
  selectOptions= ['Low', 'Meduim', 'High', 'All'];
  selectOptionsStatus= ['In Progress', 'Not Stated', 'Overdue', 'Completed', 'All' ];
  isLoading: boolean = false

  formEnum = {
    textarea: FormEnum.Textarea,
    select: FormEnum.Select,
    date: FormEnum.date
  }

  formData = {
    date: {
      value: new Date() as Date,
      required: true,
    },
    status: {
      value: '',
      required: true,
    },
    title: {
      value: '',
      required: true,
    },
    priority: {
      value: '',
      required: true,
    },
    description: {
      value: '',
      required: true,
    },
  }
  constructor(private formHanlder: FormHandler, private modalController: ModalController, private toastController: ToastController, private taskServices: TaskServices) { }

  ngOnInit(): void {
    if (this.task) {
      this.formData.title.value   = this.task.title   ?? '';
      this.formData.description.value    = this.task.description ?? '';
      this.formData.date.value = this.task.date ?? new Date();
      this.formData.priority.value = this.task.priority ?? '';
      this.formData.status.value  = this.task.status  ?? '';
    }
  }
 
  async submit() {
    try {
      this.isLoading = true;
 
      const validatedFormData = this.formHanlder.validateForm(this.formData);
      if (!validatedFormData) return;
      console.log(validatedFormData);

      if (this.task) {
        this.taskServices.update({
          ...this.task,
          ...validatedFormData,
          id: this.task.id,
        } as FullTask);
      } else {
        // Create — assign a new id
        this.taskServices.add({
          ...validatedFormData,
          id: Date.now(),
        } as FullTask);
      }
 
      await this.modalController.dismiss({ saved: true });
 
    } catch (e) {
      const toast = await this.toastController.create({
        message: 'Something went wrong. Please try again.',
        duration: 3000,
        color: 'danger',
      });
      await toast.present();
      this.isLoading = false;
    }
  }
 
  dismiss(): void {
    this.modalController.dismiss();
  }

}
