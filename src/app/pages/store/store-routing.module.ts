import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './store.component';
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
import {RecoveriesComponent} from './recoveries/recoveries.component';
import {FollowingCustomsComponent} from '../forms/following-customs/following-customs.component';
import {TransferredStoreComponent} from './transferred-store/transferred-store.component';
import {TransferredStoreInputsComponent} from './transferred-store-inputs/transferred-store-inputs.component';

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

