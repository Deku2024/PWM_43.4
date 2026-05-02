export interface Session {
  id?: string;
  name: string;
  description: string;
  players: string[];
  numberOfPlayers: number;
  password: string;
}

