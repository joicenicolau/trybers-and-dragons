import Race from './Race';

// Todas as raças devem estender da classe abstrata Race
class Dwarf extends Race { 
//  Cada raça deve possuir um número máximo de pontos de vida (maxLifePoints)
  private _maxLifePoints: number;

  // que deve ser inicializado em seu construtor
  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;

    // método newInstance da class Dwarf, vez que Dwarf é subclass
    // esse método incrementa o valor da variável instances
    // instâncias criadas da classe Dwarf
    Dwarf.newInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  // implementar o método createdRacesInstances nas classes herdeiras;
  // quantidade de instância criada a partir da class estendida
  // instâncias criadas da classe Dwarf
  static createdRacesInstances(): number {
    return this._instances;
  }
}

export default Dwarf;