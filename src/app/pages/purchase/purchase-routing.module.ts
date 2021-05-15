import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PurchaseComponent } from './purchase.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { MainComponent } from './main/main.component';
import { CenteringMainComponent } from './centering-main/centering-main.component';
import { CenteringNewComponent } from './centering-new/centering-new.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { ContainerNewComponent } from './container-new/container-new.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {OutsideComponent} from './outside/outside.component';
import {OutsideDetailComponent} from './outside-detail/outside-detail.component';

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
        path: 'outside',
        component: OutsideComponent,
      },
      {
        path: 'outside-detail',
        component: OutsideDetailComponent,
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
        path: 'container-main',
        component: ContainerMainComponent,
      },
      {
        path: 'container-new',
        component: ContainerNewComponent,
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

