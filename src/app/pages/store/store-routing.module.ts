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
import {RecoveriesComponent} from './recoveries/recoveries.component';
import {FollowingCustomsComponent} from '../forms/following-customs/following-customs.component';
import {TransferredStoreComponent} from './transferred-store/transferred-store.component';
import {TransferredStoreInputsComponent} from './transferred-store-inputs/transferred-store-inputs.component';
import {RecoveryInputsComponent} from './recovery-inputs/recovery-inputs.component';
import {ModificationStockComponent} from './modification-stock/modification-stock.component';

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
        path: 'recoveries',
        component: RecoveriesComponent,
      },
      {
        path: 'transferred-store',
        component: TransferredStoreComponent,
      },
      {
        path: 'transferred-store-inputs',
        component: TransferredStoreInputsComponent,
      },
      {
        path: 'recovery-inputs',
        component: RecoveryInputsComponent,
      },
      {
        path: 'modification-stock',
        component: ModificationStockComponent,
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

