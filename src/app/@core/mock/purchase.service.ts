import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PurchaseData } from '../data/purchase';

@Injectable()
export class PurchaseService extends PurchaseData {

  private time: Date = new Date;

  private purchases = {
    p1: { name: 'Nick Jones', quantity: 10 , price: 10 , weight: 12 , startDate: '12/01/2021' , endDate: '12/02/2023'},
    p2: { name: 'Nick Jones', quantity: 10 , price: 10 , weight: 12 , startDate: '12/01/2021' , endDate: '12/02/2023'},
    p3: { name: 'Nick Jones', quantity: 10 , price: 10 , weight: 12 , startDate: '12/01/2021' , endDate: '12/02/2023'},
    p4: { name: 'Nick Jones', quantity: 10 , price: 10 , weight: 12 , startDate: '12/01/2021' , endDate: '12/02/2023'},
    p5: { name: 'Nick Jones', quantity: 10 , price: 10 , weight: 12 , startDate: '12/01/2021' , endDate: '12/02/2023'},
    p6: { name: 'Nick Jones', quantity: 10 , price: 10 , weight: 12 , startDate: '12/01/2021' , endDate: '12/02/2023'}
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };


  getPurchases(): Observable<any> {
    return observableOf(this.purchases);
  }

}

