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
import { PurchaseRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { MainComponent } from './main/main.component';
import { CenteringMainComponent } from './centering-main/centering-main.component';
import { CenteringNewComponent } from './centering-new/centering-new.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { ContainerNewComponent } from './container-new/container-new.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import {OutsideComponent} from './outside/outside.component';
import {OutsideDetailComponent} from './outside-detail/outside-detail.component';
import {BrokeredFeeComponent} from './brokered-fee/brokered-fee.component';

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
    PurchaseRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    StoreComponent,
    ButtonsComponent,
    FormInputsComponent,
    MainComponent,
    CenteringMainComponent,
    ContainerMainComponent,
    ContainerNewComponent,
    CenteringNewComponent,
    DatepickerComponent,
    OutsideComponent,
    OutsideDetailComponent,
    BrokeredFeeComponent,
  ],
})
export class StoreModule { }
