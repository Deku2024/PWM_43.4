import { provideIonicAngular } from '@ionic/angular/standalone';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

// Tu configuración real de Firebase
const firebaseConfig = {
  projectId: 'pwm-43-4',
  appId: '1:123702675910:web:b766514b2ff8eb0f078ac7',
  storageBucket: 'pwm-43-4.firebasestorage.app',
  apiKey: 'AIzaSyCv4k9jwqiLLzmAR-cMREo9_xrxDpVzPPI',
  authDomain: 'pwm-43-4.firebaseapp.com',
  messagingSenderId: '123702675910',
  measurementId: 'G-23D9B6FB0D',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideIonicAngular(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
