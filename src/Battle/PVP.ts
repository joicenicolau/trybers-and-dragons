import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this.player2 = player2;
  }

  private isBattleDone(): boolean {
    return this.player.lifePoints <= 0 || this.player2.lifePoints <= 0;
  }

  fight(): number {
    while (!this.isBattleDone()) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    return super.fight();
  }
}

export default PVP;