import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import

@Injectable({
  providedIn: 'root',
})
export class ChargeContentService {
  private Firestore: Firestore = inject(Firestore);
  private collection: string = 'contents';

  getHomeContent() {

  }
}

