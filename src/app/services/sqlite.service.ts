import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Session } from '../models/session';


@Injectable({
  providedIn: 'root',
})
export class SQLiteService {
  private sqlite: SQLiteConnection;
  private db: SQLiteDBConnection | null = null;
  private platform: 'native' | 'web';
  private localStorageKey = 'sessions';

  constructor() {
    // Detectar plataforma
    this.platform = Capacitor.isNativePlatform() ? 'native' : 'web';
    this.sqlite = new SQLiteConnection(CapacitorSQLite);

    // Inicializar LocalStorage si está vacío (solo web)
    if (this.platform === 'web') {
      this.initLocalStorageIfEmpty();
    }
  }

  // -------- WEB: LOCALSTORAGE --------
  private initLocalStorageIfEmpty() {
    const data = localStorage.getItem(this.localStorageKey);
    if (!data) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  private getLocalSessions(): Session[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  private setLocalSessions(sessions: Session[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(sessions));
  }

  // -------- NATIVE: SQLITE --------
  private async createSQLiteConnection(): Promise<void> {
    if (!this.db) {
      try {
        this.db = await this.sqlite.createConnection(
          'sessions.db', // Nombre de la base de datos
          false, // readonly
          'no-encryption', // sin encriptar
          1, // version
          false
        );
        await this.db.open();
        await this.db.execute(`
          CREATE TABLE IF NOT EXISTS SESSIONS (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            players TEXT NOT NULL,      -- Guardaremos el array como JSON string
            numberOfPlayers INTEGER NOT NULL,
            password TEXT NOT NULL,
            masterId TEXT NOT NULL
          );
        `);
      } catch (error) {
        console.error('Error creating SQLite connection:', error);
        throw error;
      }
    }
  }

  private async closeConnection() {
    if (this.db) {
      await this.sqlite.closeConnection('sessions.db', false);
      this.db = null;
    }
  }

  // -------- MÉTODOS AUXILIARES --------
  private serializeSession(session: Session): any {
    return {
      ...session,
      players: JSON.stringify(session.players), // Convertir array a string para SQLite
    };
  }

  private deserializeSession(row: any): Session {
    return {
      id: row.id.toString(), // Convertir número a string
      name: row.name,
      description: row.description,
      players: JSON.parse(row.players), // Reconstruir array desde string
      numberOfPlayers: row.numberOfPlayers,
      password: row.password,
      masterId: row.masterId,
    };
  }

  // -------- CRUD: UNIFICADO --------

  async getAllSessions(): Promise<Session[]> {
    try {
      if (this.platform === 'web') {
        return this.getLocalSessions();
      }

      await this.createSQLiteConnection();
      const result = await this.db!.query('SELECT * FROM SESSIONS ORDER BY id DESC');

      // Deserializar cada sesión
      return result.values?.map((row) => this.deserializeSession(row)) || [];
    } catch (error) {
      console.error('Error getting sessions:', error);
      return [];
    }
  }

  async getSessionById(id: string): Promise<Session | null> {
    try {
      if (this.platform === 'web') {
        const sessions = this.getLocalSessions();
        return sessions.find((s) => s.id === id) || null;
      }

      await this.createSQLiteConnection();
      const result = await this.db!.query('SELECT * FROM SESSIONS WHERE id = ?', [parseInt(id)]);

      if (result.values && result.values.length > 0) {
        return this.deserializeSession(result.values[0]);
      }
      return null;
    } catch (error) {
      console.error('Error getting session by id:', error);
      return null;
    }
  }

  async getSessionsByPlayer(playerId: string): Promise<Session[]> {
    try {
      const allSessions = await this.getAllSessions();
      return allSessions.filter((session) => session.players.includes(playerId));
    } catch (error) {
      console.error('Error getting sessions by player:', error);
      return [];
    }
  }

  async getSessionsByMaster(masterId: string): Promise<Session[]> {
    try {
      const allSessions = await this.getAllSessions();
      return allSessions.filter((session) => session.masterId === masterId);
    } catch (error) {
      console.error('Error getting sessions by master:', error);
      return [];
    }
  }

  async addSession(session: Omit<Session, 'id'>): Promise<Session[]> {
    if (!session.name.trim()) {
      return this.getAllSessions();
    }

    try {
      if (this.platform === 'web') {
        const sessions = this.getLocalSessions();
        const newSession: Session = {
          ...session,
          id: Date.now().toString(), // ID basado en timestamp para web
        };
        sessions.push(newSession);
        this.setLocalSessions(sessions);
        return sessions;
      }

      await this.createSQLiteConnection();
      const serialized = this.serializeSession(session as Session);
      await this.db!.run(
        `INSERT INTO SESSIONS (name, description, players, numberOfPlayers, password, masterId)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          serialized.name,
          serialized.description,
          serialized.players, // Ya es JSON string
          serialized.numberOfPlayers,
          serialized.password,
          serialized.masterId,
        ],
      );
      return this.getAllSessions();
    } catch (error) {
      console.error('Error adding session:', error);
      return this.getAllSessions();
    }
  }

  async updateSession(id: string, updatedData: Partial<Session>): Promise<Session[]> {
    try {
      if (this.platform === 'web') {
        const sessions = this.getLocalSessions().map((session) =>
          session.id === id ? { ...session, ...updatedData } : session,
        );
        this.setLocalSessions(sessions);
        return sessions;
      }

      await this.createSQLiteConnection();

      // Construir la consulta dinámicamente basada en los campos a actualizar
      const updates: string[] = [];
      const values: any[] = [];

      if (updatedData.name !== undefined) {
        updates.push('name = ?');
        values.push(updatedData.name);
      }
      if (updatedData.description !== undefined) {
        updates.push('description = ?');
        values.push(updatedData.description);
      }
      if (updatedData.players !== undefined) {
        updates.push('players = ?');
        values.push(JSON.stringify(updatedData.players));
      }
      if (updatedData.numberOfPlayers !== undefined) {
        updates.push('numberOfPlayers = ?');
        values.push(updatedData.numberOfPlayers);
      }
      if (updatedData.password !== undefined) {
        updates.push('password = ?');
        values.push(updatedData.password);
      }
      if (updatedData.masterId !== undefined) {
        updates.push('masterId = ?');
        values.push(updatedData.masterId);
      }

      if (updates.length === 0) {
        return this.getAllSessions();
      }

      values.push(parseInt(id));
      await this.db!.run(`UPDATE SESSIONS SET ${updates.join(', ')} WHERE id = ?`, values);

      return this.getAllSessions();
    } catch (error) {
      console.error('Error updating session:', error);
      return this.getAllSessions();
    }
  }

  async addPlayerToSession(sessionId: string, playerId: string): Promise<Session | null> {
    try {
      const session = await this.getSessionById(sessionId);
      if (!session) return null;

      if (session.players.includes(playerId)) {
        return session; // El jugador ya está en la sesión
      }

      const updatedPlayers = [...session.players, playerId];
      await this.updateSession(sessionId, { players: updatedPlayers });

      return this.getSessionById(sessionId);
    } catch (error) {
      console.error('Error adding player to session:', error);
      return null;
    }
  }

  async removePlayerFromSession(sessionId: string, playerId: string): Promise<Session | null> {
    try {
      const session = await this.getSessionById(sessionId);
      if (!session) return null;

      const updatedPlayers = session.players.filter((p) => p !== playerId);
      await this.updateSession(sessionId, { players: updatedPlayers });

      return this.getSessionById(sessionId);
    } catch (error) {
      console.error('Error removing player from session:', error);
      return null;
    }
  }

  async deleteSession(id: string): Promise<Session[]> {
    try {
      if (this.platform === 'web') {
        const sessions = this.getLocalSessions().filter((session) => session.id !== id);
        this.setLocalSessions(sessions);
        return sessions;
      }

      await this.createSQLiteConnection();
      await this.db!.run('DELETE FROM SESSIONS WHERE id = ?', [parseInt(id)]);
      return this.getAllSessions();
    } catch (error) {
      console.error('Error deleting session:', error);
      return this.getAllSessions();
    }
  }

  async clearAllSessions(): Promise<void> {
    try {
      if (this.platform === 'web') {
        localStorage.setItem(this.localStorageKey, JSON.stringify([]));
        return;
      }

      await this.createSQLiteConnection();
      await this.db!.run('DELETE FROM SESSIONS');
    } catch (error) {
      console.error('Error clearing sessions:', error);
    }
  }

  async verifySessionPassword(sessionId: string, password: string): Promise<boolean> {
    try {
      const session = await this.getSessionById(sessionId);
      if (!session) return false;
      return session.password === password;
    } catch (error) {
      console.error('Error verifying session password:', error);
      return false;
    }
  }
}
