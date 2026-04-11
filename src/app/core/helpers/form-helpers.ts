export function validateFormData(formData: any) {
    const emptyFields: any[] = [];
    for (const key in formData) {
      let formElem = {
        key,
        error: formData[key]?.error
      };
      if (
        formData.hasOwnProperty(key) &&
        formData[key].required &&
        (formData[key].value === '' || formData[key].value === undefined || formData[key].value === false || formData[key].value === null)
      ) {
        emptyFields.push(formElem);
      } else if (formData[key].confirm_password && formData['password'].value && (formData[key].value !== formData['password'].value)) {
        formElem.error = 'Passwords does not match';
        emptyFields.push(formElem);
      }
    }
    return emptyFields;
  }

  export function flattenFormData(formData: any): any {
    const flattenedFormData: any = {};
  
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (
          typeof formData[key] === 'object' &&
          formData[key].hasOwnProperty('value')
        ) {
          flattenedFormData[key] = formData[key].value;
        } else {
          flattenedFormData[key] = formData[key];
        }
      }
    }
  
    return flattenedFormData;
  }

  export function capitalizeFixSpaceHelper(str: any): string {
    return str.replace(/_/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Fix camelCase
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  