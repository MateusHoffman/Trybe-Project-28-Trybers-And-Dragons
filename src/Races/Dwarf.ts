import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _numbersInstancesDwarf = 0;

  constructor(nameC: string, dexterityC: number) {
    super(nameC, dexterityC); // name, dexterity
    this._maxLifePoints = 80;
    Dwarf._numbersInstancesDwarf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._numbersInstancesDwarf;
  }
}