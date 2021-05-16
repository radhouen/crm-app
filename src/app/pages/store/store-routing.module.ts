import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './store.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { ReceivingPermissionMainComponent } from './receiving-permission-main/receiving-permission-main.component';
import { DismissalNoticeMainComponent } from './dismissal-notice-main/dismissal-notice-main.component';
import { CenteringMainComponent } from './centering-main/centering-main.component';
import { CenteringNewComponent } from './centering-new/centering-new.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { ContainerNewComponent } from './container-new/container-new.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {OutsideComponent} from './outside/outside.component';
import {OutsideDetailComponent} from './outside-detail/outside-detail.component';
import {BrokeredFeeComponent} from './brokered-fee/brokered-fee.component';
import {FollowingCustomsComponent} from '../forms/following-customs/following-customs.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'receiving-permission-main',
        component: ReceivingPermissionMainComponent,
      },
      {
        path: 'dismissal-notice-main',
        component: DismissalNoticeMainComponent,
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
        path: 'centering-main',
        component: CenteringMainComponent,
      },
      {
        path: 'brokered-fee',
        component: BrokeredFeeComponent,
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
export class StoreRoutingModule {
}

