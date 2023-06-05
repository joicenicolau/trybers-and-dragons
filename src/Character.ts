import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

// A classe deve implementar a interface Fighter
class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number; 
  private _lifePoints: number; 
  private _strength: number; 
  private _defense: number; 
  private _dexterity: number; 
  private _energy: Energy;

  constructor(private _name: string) {
    this._dexterity = getRandomInt(1, 10);
    // instância de Elf - o ts que incluiu o new no Elf.
    // ser a mesma definida em dexterity
    // espera 02 argumentos
    this._race = new Elf(this._name, this._dexterity);
    // espera 01 argumento
    this._archetype = new Mage(this._name);
    // maxLifePoints por padrão com metade do maxLifePoints da raça instanciada
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      // com o mesmo valor do arquétipo
      // deu um erro que faltava o energytype
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10), 
    };
  }

  // atributos da classe Character podem ser lidos mas não podem ser alterados
  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    // Lembre-se que energy é um objeto
    return { ...this._energy };
  }

  // A classe Character também deve implementar os métodos estendidos da interface Fighter
  // receiveDamage - este método recebe por parâmetro um valor (attackPoints)
  receiveDamage(attackPoints: number): number {
    // o valor da defesa (defense) do personagem deve ser subtraído do valor do ataque recebido (attackPoints)
    const damage = attackPoints - this._defense;

    // Se o dano calculado (damage) for maior que 0, você perde esse valor em pontos de vida (lifePoints). Se o dano calculado (damage) for igual ou menor a zero, você deve perder apenas 1 ponto de vida (lifePoints);
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    // Se ao receber o ataque e perder pontos de vida (lifePoints), e se sua vida chegar a 0 ou menos, você deve fixá-la com o valor -1;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    // Se ao final sempre retorne o valor atualizado de seus pontos de vida.
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    // Este dano deve ser equivalente a força (strength) de quem ataca.
    const damage = this._strength;
    // o inimigo recebido por parâmetro recebe um dano
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    // os atributos maxLifePoints, strength, dexterity e defense terão um incremento de no mínimo 1 e no máximo 10 pontos
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    // (amount dentro de energy) deve ficar cheio, valendo exatamente 10;
    this._energy.amount = 10;
    // Se o atributo maxLifePoints do Character for maior que o maxLifePoints de sua raça (race)
    if (this._maxLifePoints > this._race.maxLifePoints) {
      // ele deve receber o valor igual ao do da raça.
      this._maxLifePoints = this._race.maxLifePoints;
    }
    // o atributo lifePoints também deve ser atualizado, recebendo o novo valor de maxLifePoints
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;