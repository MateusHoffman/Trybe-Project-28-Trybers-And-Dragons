import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _numbersInstancesOrc = 0;

  constructor(nameC: string, dexterityC: number) {
    super(nameC, dexterityC); // name, dexterity
    this._maxLifePoints = 74;
    Orc._numbersInstancesOrc += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._numbersInstancesOrc;
  }
}