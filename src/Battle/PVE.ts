import Battle from './Battle';
import Monster from '../Monster';
import Fighter from '../Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';

class PVE extends Battle {
  private monsters: (Monster | Fighter | SimpleFighter)[];

  // em seu construtor seja recebido uma pessoa personagem lutadora (Character Fighter
  // e um array com pelo menos um monstro (Monster)
  // este array de monstros também aceita instâncias de pessoas personagens lutadoras sendo elas simples ou não; (Fighter, SimpleFighter)
  constructor(player: Fighter, monsters: 
  (Monster | Fighter | SimpleFighter)[]) {
    super(player);
    this.monsters = monsters;
  }

  // array de monstros - dai usei every, para retornar todos os monstros que estão com vida menor que zero
  private isBattleDone(): boolean {
    return this.player.lifePoints <= 0 
    || this.monsters.every((monster) => monster.lifePoints <= 0);
  }

  fight(): number {
    // loop while que continua enquanto a batalha não estiver concluída
    while (!this.isBattleDone()) {
      this.player.attack(this.getNextMonster());
      // uma personagem contra apenas um oponete ou uma legião deles.
      this.monsters.forEach((monster) => {
        if (monster.lifePoints > 0) {
          monster.attack(this.player);
        }
      });
    }
    return super.fight();
  }

  // método retorna o próximo monstro ou lutador disponível para atacar
  // as pra não retornar do find nada diferente do esperado
  private getNextMonster(): Monster | Fighter | SimpleFighter {
    return this.monsters.find((monster) => 
      monster.lifePoints > 0) as Monster | Fighter | SimpleFighter;
  }
}

export default PVE;
