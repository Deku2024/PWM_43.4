export interface Character {
  age: number;
  alignment: string,
  classes: string,
  experience: number,
  life: number,
  maxLife: number,
  tempLife: number,
  name: string,
  race: string,
  attributes: {
    charisma: number,
    constitution: number,
    dexterity: number,
    intelligence: number,
    strength: number,
    wisdom: number
  }
}
