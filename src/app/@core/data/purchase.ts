import { Observable } from 'rxjs';

export interface Purchase {
  name: string;
  quantity: number;
  price: number;
  weight: number;
  startDate: Date;
  endDate: Date;
}

// export interface Contacts {
//   purchase: Purchase;
//   type: string;
// }

// export interface RecentPurchase extends Contacts {
//   time: number;
// }

export abstract class PurchaseData {
  abstract getPurchases(): Observable<Purchase[]>;
  // abstract getContacts(): Observable<Contacts[]>;
  // abstract getRecentUsers(): Observable<RecentUsers[]>;
}
