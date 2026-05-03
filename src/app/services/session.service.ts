import { inject, Injectable, OnDestroy, signal } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  onSnapshot,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  updateDoc,
  where
} from '@angular/fire/firestore';
import { Session } from '../models/session';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService implements OnDestroy {
  private readonly col: string = 'sessions';
  private readonly firestore = inject(Firestore);
  private readonly auth = inject(AuthService);
  currentSession = signal<Session | null>(null);
  sessionList = signal<Session[]>([]);
  private unsubscribe: (() => void) | null = null;

  constructor() {
    this.initRealtimeListener();
  }

  private initRealtimeListener() {
    const currentUser = this.auth.getCurrentUser();

    if (!currentUser) {
      console.log('No hay usuario autenticado, no se inicializa el listener');
      return;
    }

    this.unsubscribe = onSnapshot(
      query(collection(this.firestore, this.col), where('masterId', '==', currentUser.uid)),
      (snapshot: QuerySnapshot<DocumentData>) => {
        const sessions: Session[] = [];
        snapshot.forEach((doc) => {
          this.introduceNewSession(sessions, doc);
        });
        this.sessionList.set(sessions);
      },
    );
  }
  private introduceNewSession(
    sessions: Session[],
    doc: QueryDocumentSnapshot<DocumentData, DocumentData>,
  ) {
    sessions.push({
      id: doc.id,
      name: doc.data()['name'] || '',
      description: doc.data()['description'] || '',
      players: doc.data()['players'] || [],
      numberOfPlayers: doc.data()['numberOfPlayers'] || 0,
      password: doc.data()['password'] || '',
      masterId: this.auth.getCurrentUser()?.uid,
    } as Session);
  }

  async addSession(session: Session): Promise<void> {
    await addDoc(collection(this.firestore, this.col), session);
  }

  async removeSession(session: Session): Promise<void> {
    await deleteDoc(doc(this.firestore, `${this.col}/${session.id}`));
  }

  async updateSession(session: Partial<Session>): Promise<void> {
    await updateDoc(doc(this.firestore, `${this.col}/${session.id}`), session);
  }

  getCurrentSession(): Session | null {
    return this.currentSession();
  }

  setCurrentSession(session: Session): void {
    this.currentSession.set(session);
  }

  clearCurrentSession() {
    this.currentSession.set(null);
  }

  getSessionsList() {
    return this.sessionList;
  }

  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
