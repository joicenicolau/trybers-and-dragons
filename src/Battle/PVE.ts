import Battle from './Battle';
import Monster from '../Monster';
import Fighter from '../Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';

class PVE extends Battle {
  private monsters: (Monster | Fighter | SimpleFighter)[];

  constructor(player: Fighter, monsters: 
  (Monster | Fighter | SimpleFighter)[]) {
    super(player);
    this.monsters = monsters;
  }

  private isBattleDone(): boolean {
    return this.player.lifePoints <= 0 
    || this.monsters.every((monster) => monster.lifePoints <= 0);
  }

  fight(): number {
    while (!this.isBattleDone()) {
      this.player.attack(this.getNextMonster());
      this.monsters.forEach((monster) => {
        if (monster.lifePoints > 0) {
          monster.attack(this.player);
        }
      });
    }
    return super.fight();
  }

  private getNextMonster(): Monster | Fighter | SimpleFighter {
    return this.monsters.find((monster) => 
      monster.lifePoints > 0) as Monster | Fighter | SimpleFighter;
  }
}

export default PVE;
