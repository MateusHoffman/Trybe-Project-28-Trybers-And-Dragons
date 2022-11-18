import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _numbersInstancesMage = 0;
  private _energyType: EnergyType;

  constructor(nameC: string) {
    super(nameC);
    this._energyType = 'mana';
    Mage._numbersInstancesMage += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._numbersInstancesMage;
  }
}