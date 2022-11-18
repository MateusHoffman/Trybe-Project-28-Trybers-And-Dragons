export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(nameC: string, dexterityC: number) {
    this._name = nameC;
    this._dexterity = dexterityC;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}