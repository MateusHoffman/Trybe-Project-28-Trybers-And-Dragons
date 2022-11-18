import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _numbersInstancesNecromancer = 0;
  private _energyType: EnergyType;

  constructor(nameC: string) {
    super(nameC);
    this._energyType = 'mana';
    Necromancer._numbersInstancesNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._numbersInstancesNecromancer;
  }
}