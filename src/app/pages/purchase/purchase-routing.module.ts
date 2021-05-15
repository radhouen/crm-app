import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PurchaseComponent } from './purchase.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { MainComponent } from './main/main.component';
import { CenteringMainComponent } from './centering-main/centering-main.component';
import { CenteringNewComponent } from './centering-new/centering-new.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'layouts',
        component: MainComponent,
      },
      {
        path: 'centering-main',
        component: CenteringMainComponent,
      },
      {
        path: 'centering-new',
        component: CenteringNewComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PurchaseRoutingModule {
}

