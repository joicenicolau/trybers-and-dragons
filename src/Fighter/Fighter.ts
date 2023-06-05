import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

// Crie uma interface chamada Fighter
// O atributo energy e o método special() devem ser opcionais
interface Fighter {
  // A interface deverá possuir os atributos
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  // A interface deverá possuir os métodos
  // que recebe um enemy do tipo Fighter como parâmetro e não possui retorno (void)
  attack(enemy: SimpleFighter): void;
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;