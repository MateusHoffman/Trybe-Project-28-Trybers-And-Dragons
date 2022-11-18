import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _numbersInstancesWarrior = 0;
  private _energyType: EnergyType;

  constructor(nameC: string) {
    super(nameC);
    this._energyType = 'stamina';
    Warrior._numbersInstancesWarrior += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._numbersInstancesWarrior;
  }
}