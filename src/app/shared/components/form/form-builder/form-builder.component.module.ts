import { FormContentComponent } from '../form-content/form-content.component';
import { FormBuilderComponent } from './form-builder.component';
import { FormTitlesComponent } from '../form-titles/form-titles.component';
import { FormContentGroupComponent } from '../form-content-group/form-content-group.component';

export const FormBuilderModule = [FormContentComponent, FormBuilderComponent, FormTitlesComponent, FormContentGroupComponent] as const;
