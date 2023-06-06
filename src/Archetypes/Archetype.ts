import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special: number;
  private _cost: number;
  
  constructor(private _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  get name() { return this._name; }
  get special() { return this._special; }
  get cost() { return this._cost; }

  protected static _instances = 0;

  protected static newInstance() {
    this._instances += 1;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;