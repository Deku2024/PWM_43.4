import { Injectable, inject } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  User
} from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore); // Inyectar el servicio de base de datos

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string, username: string) {
    // 1. Crear el usuario en Authentication
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;

    // 2. Actualizar el perfil básico (opcional, pero recomendado)
    await updateProfile(user, { displayName: username });

    // 3. CREAR LA COLECCIÓN Y EL DOCUMENTO EN FIRESTORE
    // doc(base_de_datos, 'nombre_coleccion/ID_del_documento')
    const userDocRef = doc(this.firestore, `users/${user.uid}`);

    // Guardamos los datos que queremos ver en la consola
    await setDoc(userDocRef, {
      uid: user.uid,
      username: username,
      email: email,
      createdAt: new Date(),
    });

    return userCredential;
  }

  logout() {
    return this.auth.signOut();
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
