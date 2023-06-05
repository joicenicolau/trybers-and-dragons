import Battle from './Battle';
import Fighter from '../Fighter';

// A classe PVP deve herdar de Battle
class PVP extends Battle {
  // é esperado que em seu construtor sejam recebidos dois Characters lutadores
  // o super espera somente 01 argumento
  // criei a variável player 02 como atributo privado, pois ele não vem da class mãe. Daí ele ode ser acessado só aqui na PVP 
  private player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    // Use um dos players para ser parâmetro do super na inicialização
    super(player);
    this.player2 = player2;
  }

  private isBattleDone(): boolean {
    // A retorna um bool.
    return this.player.lifePoints <= 0 || this.player2.lifePoints <= 0;
  }

  // use o método fight do super para dar o veredito da batalha
  fight(): number {
  // loop com WHILE que continua até que um dos players tenha seus pontos de vida (lifePoints) igual ou menor que 0. Até que retorna true
    while (!this.isBattleDone()) {
      // Dentro do loop, chamar o método attack(), que vem de fighter
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    // super que vem de battle
    return super.fight();
  }
}

export default PVP;