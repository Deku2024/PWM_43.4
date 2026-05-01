import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Session {
  id? : string;
  name: string;
  description: string;
  players: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private readonly col : string = 'sessions';
  private readonly firestore = inject(Firestore);

  async addSession(session: Session) : Promise<void> {
    await addDoc(this.refCol(), session);
  }

  async removeSession(session: Session) : Promise<void> {
    await deleteDoc(doc(this.firestore, `${this.col}/${session.id}`));
  }

  getSessions() : Observable<Session[]> {
    return collectionData(this.refCol()) as Observable<Session[]>;
  }

  updateSession(session: Partial<Session>) : void {
      updateDoc(doc(this.firestore, `${this.col}/${session.id}`), session);
  }

  private refCol() {
    return collection(this.firestore, this.col);
  }
}
