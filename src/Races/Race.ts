abstract class Race {
  protected static _instances = 0;

  constructor(private _name: string, private _dexterity: number) {}

  get name() { return this._name; }
  get dexterity() { return this._dexterity; }

  protected static newInstance() {
    this._instances += 1;
  }
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;