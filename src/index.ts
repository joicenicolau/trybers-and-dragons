import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Crie 3 objetos do tipo Character
// um argumento é esperado
const player1 = new Character('Legolas');
const player2 = new Character('Tauriel');
const player3 = new Character('Galadriel');

// Execute algumas vezes o método levelUp do player1
player1.levelUp();
player1.levelUp();
player1.levelUp();

// Crie 2 objetos do tipo Monster
const monster1 = new Monster();
const monster2 = new Dragon();

// Crie um objeto do tipo PVP
const pvp = new PVP(player2, player3);

// Crie um objeto do tipo PVE
// Como parâmetro do construtor passe player1 e um array contendo monster1 e monster2
const pve = new PVE(player1, [monster1, monster2]);

// Crie uma função chamada runBattles
// parâmetro um array de batalhas (battles)
// este array é do tipo Battle
function runBattles(battles: Battle[]) {
  // crie uma repetição percorrendo este array e chame o método fight
  battles.forEach((battle) => battle.fight());
}

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