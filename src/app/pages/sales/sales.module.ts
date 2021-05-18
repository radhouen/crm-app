import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FacturesComponent } from './factures/factures.component';
import { DismissalNoticeMainComponent } from './dismissal-notice-main/dismissal-notice-main.component';
import { CenteringMainComponent } from './centering-main/centering-main.component';
import { CenteringNewComponent } from './centering-new/centering-new.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { ReceivingPermissionNewComponent } from './receiving-permission-new/receiving-permission-new.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import {OutsideComponent} from './outside/outside.component';
import {OutsideDetailComponent} from './outside-detail/outside-detail.component';
import {RecoveriesComponent} from './recoveries/recoveries.component';
import {TransferredStoreComponent} from './transferred-store/transferred-store.component';
import {TransferredStoreInputsComponent} from './transferred-store-inputs/transferred-store-inputs.component';
import {RecoveryInputsComponent} from './recovery-inputs/recovery-inputs.component';
import {ModificationStockComponent} from './modification-stock/modification-stock.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    SalesRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    SalesComponent,
    ButtonsComponent,
    FormInputsComponent,
    FacturesComponent,
    DismissalNoticeMainComponent,
    CenteringMainComponent,
    ContainerMainComponent,
    ReceivingPermissionNewComponent,
    CenteringNewComponent,
    DatepickerComponent,
    OutsideComponent,
    OutsideDetailComponent,
    RecoveriesComponent,
    TransferredStoreComponent,
    TransferredStoreInputsComponent,
    RecoveryInputsComponent,
    ModificationStockComponent,
  ],
})
export class SalesModule { }
