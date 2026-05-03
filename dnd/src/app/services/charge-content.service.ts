import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ChargeContentService {

  private collectionName = 'contents';
  firestore: Firestore = inject(Firestore);

  getHomeContent(): Observable<Content[]> {
    const ref = collection(this.firestore, `${this.collectionName}`);
    return collectionData(ref, { idField: 'id' }) as Observable<Content[]>;
  }
}

