import { SimpleFighter } from './Fighter';

// A classe deve implementar a interface SimpleFighter
class Monster implements SimpleFighter {
  // A classe Monster deve ter os atributos privados lifePoints e strength
  // refatorei com o protected para poder usar o lifePoints em Dragon.
  protected _lifePoints: number;
  private _strength: number; 

  // inicializados em seu construtor
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  // Os atributos da classe Monster podem ser lidos mas não podem ser alterados
  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  // implementar os métodos estendidos da interface SimpleFighter
  receiveDamage(attackPoints: number): number {
    // Este valor deve ser decrescido de seus pontos de vida (lifePoints)
    this._lifePoints -= attackPoints;

    // sua vida nunca poderá chegar a 0, se isto acontecer seus lifePoints devem valer -1
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    // Ao final o método deve retornar o valor atualizado dos pontos de vida.
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    // Este dano deve ser calculado a partir de attackPoints equivalentes à força (strength) de quem ataca.
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }
}

export default Monster;