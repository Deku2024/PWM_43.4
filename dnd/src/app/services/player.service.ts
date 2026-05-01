import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, deleteDoc, doc, updateDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private firebase: Firestore = inject(Firestore);
  private collection: string = 'characters';

  async saveCharacter(data: any) {
    const docRef = collection(this.firebase, `${this.collection}`);
    return addDoc(docRef, data);
  }

  async deleteCharacter(characterId: string) {
    const docRef = doc(this.firebase, `${this.collection}/${characterId}`);
    return deleteDoc(docRef);
  }

  async updateCharacter(characterId: string, data: Partial<any>) {
    const docRef = doc(this.firebase, `${this.collection}/${characterId}`);
    return updateDoc(docRef, data);
  }

  async getCharacters(){
    const docRef = collection(this.firebase, `${this.collection}`);
    return collectionData(docRef) as Observable<any>;
  }
}
