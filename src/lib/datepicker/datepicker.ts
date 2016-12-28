import {
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'md2-datepicker',
  templateUrl: 'datepicker.html',
  styleUrls: ['datepicker.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Md2Datepicker {
}

@NgModule({
  imports: [CommonModule],
  exports: [Md2Datepicker, Md2Calendar],
  declarations: [Md2Datepicker, Md2Calendar],
})
export class Md2DatepickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Md2DatepickerModule
    };
  }
}
