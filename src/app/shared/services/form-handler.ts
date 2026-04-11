import { Injectable } from '@angular/core';
import { ComponentServices } from './components';
import { capitalizeFixSpaceHelper, flattenFormData, validateFormData } from '@app/core';

@Injectable({
  providedIn: 'root',
})
export class FormHandler {

  constructor(    private components: ComponentServices) {}

  validateForm(formData: any) {
    const emptyFields = validateFormData(formData);
    if (emptyFields.length) {
      this.components.presentToast(emptyFields[0]?.error ?? `${capitalizeFixSpaceHelper(emptyFields[0]?.key)} can't be empty.`, 'danger');
      return false;
    } else {
      const flattenData = flattenFormData(formData);
      return flattenData;
    }
  }
  
}
