import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _numbersInstancesHalfling = 0;

  constructor(nameC: string, dexterityC: number) {
    super(nameC, dexterityC); // name, dexterity
    this._maxLifePoints = 60;
    Halfling._numbersInstancesHalfling += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._numbersInstancesHalfling;
  }
}