import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('player1');

for (let index = 0; index < 50; index += 1) player1.levelUp();

const player2 = new Character('player2');
const player3 = new Character('player3');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (arrBattles: Battle[]) => {
  arrBattles.forEach((battle) => battle.fight());
};
export default Dragon;
export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};