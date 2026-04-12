import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormEnum, FullTask, TaskServices } from '@app/core';
import { FormContentComponent, FormContentGroupComponent, FormTitlesComponent } from '@app/shared/components';
import { FormHandler } from '@app/shared/services/form-handler';
import { IonButton, IonLabel, ModalController, ToastController, IonSpinner } from "@ionic/angular/standalone";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonSpinner, IonLabel, FormContentComponent, FormContentGroupComponent, FormTitlesComponent, IonButton, FormsModule]
})
export class CreateTaskComponent  implements OnInit {
  @Input() task?: FullTask;
  selectOptions= [{value: 'low', id: 'Low'}, {value:'medium', id: 'Medium'}, {value: 'high', id: 'High'}, {value:'all', id: 'All'}];
  selectOptionsStatus= [ 
    {value: 'all', id: 'All'},
    {value: 'in-progress', id: 'In Progress'},
    {value: 'completed', id: 'Completed'},
    {value: 'not-started', id: 'Not Started'},
    {value: 'overdue', id: 'Overdue'},
  ];
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
      this.isLoading = false;
      const toast = await this.toastController.create({
        message: `${e} Sorry, form cannot be submitted`,
        duration: 1500,
        color: 'danger',
      });
      await toast.present();
    } finally {
      this.isLoading = false;
    }
  }
 
  dismiss(): void {
    this.modalController.dismiss();
  }

}
