import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(
    protected _lifePoints: number = 85,
    protected _strength: number = 36,
  ) {
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const newLife = this._lifePoints - attackPoints;
    if (newLife <= 0) this._lifePoints = -1;
    return newLife;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}