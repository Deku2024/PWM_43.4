import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root',
})
export class ChargeContentService {
  private collectionName = 'contents';
  firestore: Firestore = inject(Firestore);

  async getHomeContent(): Promise<Content[]> {
    const ref = collection(this.firestore, this.collectionName);
    const querySnapshot = await getDocs(ref);

    console.log('Número de documentos:', querySnapshot.docs.length);

    const contents = querySnapshot.docs.map(doc => {
      console.log('Documento:', doc.id, doc.data());
      const data = doc.data();
      return {
        id: doc.id,
        title: data['title'],
        description: data['description'],
      } as Content;
    });

    console.log('Contenido mapeado:', contents);
    return contents;
  }
}

