import { EnergyType } from '../Energy';

// criar a classe abstrata Archetype
abstract class Archetype {
  // A classe Archetype deve ter os atributos privados: name, special, cost
  // inicializados em seu construtor
  // name deve ser recebido como parâmetro e inicializado no construtor

  // special e cost devem ser apenas inicializados no construtor com o valor 0
  private _special: number;
  private _cost: number;
  
  constructor(private _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  // Os atributos da classe Archetype podem ser lidos, mas não podem ser alterados
  get name() { return this._name; }
  get special() { return this._special; }
  get cost() { return this._cost; }

  // verifica a quantidade de instâncias criadas a partir das classes estendidas
  // crei uma varável com o protected para modificar somente dentro das subclasses
  protected static _instances = 0;

  // criei um método para chamar a variável
  // incrementa o valor da variável
  protected static newInstance() {
    this._instances += 1;
  }

  // deve ter um método estático chamado createdRacesInstances, que retorna um number
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  // A classe Archetype deve ter um getter abstrato chamado energyType que retorna uma EnergyType
  abstract get energyType(): EnergyType;
}

export default Archetype;