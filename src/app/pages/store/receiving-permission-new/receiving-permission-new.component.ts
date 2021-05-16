import { Component } from '@angular/core';
// import {PurchaseService } from '../../../@core/mock/purchase.service'
@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./receiving-permission-new.component.scss'],
  templateUrl: './receiving-permission-new.component.html',
})
export class ReceivingPermissionNewComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  purchases = [];

  // constructor( private purchaseService: PurchaseService) {

  //   // this.purchaseService.getPurchases().subscribe( (data) => {
  //   //   this.purchases = data ;
  //   // }, (err) => {
  //   //   console.log(err)
  //   // });


  // }
}
