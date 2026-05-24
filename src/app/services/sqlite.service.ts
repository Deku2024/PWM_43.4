import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private sqlite: SQLiteConnection | null = null;
  private db: SQLiteDBConnection | null = null;
  private isInitialized = false;

  constructor() {
    if (Capacitor.getPlatform() !== 'web' && CapacitorSQLite) {
      this.sqlite = new SQLiteConnection(CapacitorSQLite);
      console.log('se ha llamado al método');
    } else {
      console.warn('SQLite no está disponible en esta plataforma.');
    }
  }

  private async initSQLite(): Promise<void> {
    const platform = Capacitor.getPlatform();
    const isNative = platform === 'ios' || platform === 'android';

    if (isNative && CapacitorSQLite) {
      try {
        this.sqlite = new SQLiteConnection(CapacitorSQLite);
        await this.initDB();
        this.isInitialized = true;
        console.log('SQLite inicializado correctamente');
      } catch (error) {
        console.error('Error inicializando SQLite:', error);
      }
    } else {
      console.warn('SQLite solo disponible en iOS/Android. Plataforma actual:', platform);
    }
  }

  private async initDB(): Promise<void> {
    if (!this.sqlite) {
      throw new Error('SQLite no inicializado');
    }

    if (this.db) return;

    this.db = await this.sqlite.createConnection(
      'favoritos',
      false,
      'no-encryption',
      1,
      false,
    );

    await this.db.open();

    await this.db.execute(`
      CREATE TABLE IF NOT EXISTS favoritos (
        uid TEXT PRIMARY KEY
      );
    `);
  }

  async esFavorito(uid: string): Promise<boolean> {
    await this.initDB();
    if (!this.db) return false;

    const res = await this.db.query('SELECT uid FROM favoritos WHERE uid = ?', [uid]);
    return res.values !== undefined && res.values.length > 0;
  }

  async addFavorite(uid: string): Promise<void> {
    await this.initDB();
    if (!this.db) return;

    await this.db.run('INSERT OR IGNORE INTO favoritos(uid) VALUES(?)', [uid]);
  }

  async removeFavorite(uid: string): Promise<void> {
    await this.initDB();
    if (!this.db) return;

    await this.db.run('DELETE FROM favoritos WHERE uid = ?', [uid]);
  }

  async getTodosFavoritos(): Promise<string[]> {
    await this.initDB();
    if (!this.db) return [];

    const res = await this.db.query('SELECT uid FROM favoritos');
    return res.values?.map((row) => row.uid) || [];
  }
}
