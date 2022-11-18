import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _numbersInstancesElf = 0;

  constructor(nameC: string, dexterityC: number) {
    super(nameC, dexterityC); // name, dexterity
    this._maxLifePoints = 99;
    Elf._numbersInstancesElf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._numbersInstancesElf;
  }
}