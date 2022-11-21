import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player1: Fighter,
    private _arrMonster: Array<Fighter | SimpleFighter>,
  ) {
    super(_player1);
  }

  fight(): number {
    if (this._player1.lifePoints > 0) {
      this._arrMonster.forEach((monster) => {
        this._player1.attack(monster);
        monster.attack(this._player1);
      });
    }
    if (this._player1.lifePoints === -1) return -1;
    return 1;
  }
}