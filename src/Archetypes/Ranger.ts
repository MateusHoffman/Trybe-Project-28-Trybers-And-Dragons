import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _numbersInstancesRanger = 0;
  private _energyType: EnergyType;

  constructor(nameC: string) {
    super(nameC);
    this._energyType = 'stamina';
    Ranger._numbersInstancesRanger += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._numbersInstancesRanger;
  }
}