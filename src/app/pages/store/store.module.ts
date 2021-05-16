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
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { ReceivingPermissionMainComponent } from './receiving-permission-main/receiving-permission-main.component';
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
    StoreRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    StoreComponent,
    ButtonsComponent,
    FormInputsComponent,
    ReceivingPermissionMainComponent,
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
  ],
})
export class StoreModule { }
