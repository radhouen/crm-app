import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalesComponent } from './sales.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FacturesComponent } from './factures/factures.component';
import { DismissalNoticeMainComponent } from './dismissal-notice-main/dismissal-notice-main.component';
import { BillsMainComponent } from './bills-main/bills-main.component';
import { OffersMainComponent } from './offers-main/offers-main.component';
import { OffersNewComponent } from './offers-new/offers-new.component';
import { DiscountMainComponent } from './discount-main/discount-main.component';
import { DiscountNewComponent } from './discount-new/discount-new.component';
import { BillsNewComponent } from './bills-new/bills-new.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { ReceivingPermissionNewComponent } from './receiving-permission-new/receiving-permission-new.component';
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
import { ReceiptMainComponent } from './receipt-main/receipt-main.component';
import { ReceiptNewComponent } from './receipt-new/receipt-new.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'factures',
        component: FacturesComponent,
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
        path: 'bills-main',
        component: BillsMainComponent,
      },
      {
        path: 'discount-main',
        component: DiscountMainComponent,
      },
      {
        path: 'discount-new',
        component: DiscountNewComponent,
      },
      {
        path: 'offers-new',
        component: OffersNewComponent,
      },
      {
        path: 'offers-main',
        component: OffersMainComponent,
      },
      {
        path: 'receipt-new',
        component: ReceiptNewComponent,
      },
      {
        path: 'receipt-main',
        component: ReceiptMainComponent,
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
        path: 'bills-new',
        component: BillsNewComponent,
      },
      {
        path: 'container-main',
        component: ContainerMainComponent,
      },
      {
        path: 'receiving-permission-new',
        component: ReceivingPermissionNewComponent,
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
export class SalesRoutingModule {
}

