// criar a classe abstrata Race
abstract class Race {
  // A classe Race deve ter os atributos privados: name e dexterity
  // ambos inicializados em seu construtor
  constructor(private _name: string, private _dexterity: number) {}

  // Os atributos da classe Race podem ser lidos, mas não podem ser alterados
  get name() { return this._name; }
  get dexterity() { return this._dexterity; }

  // deve ter um método estático chamado createdRacesInstances, que retorna um number
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  // deve ter um getter abstrato chamado maxLifePoints que retorna um number
  abstract get maxLifePoints(): number;
}

export default Race;