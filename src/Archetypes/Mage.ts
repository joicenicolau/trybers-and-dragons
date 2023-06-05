import Archetype from './Archetype';
import { EnergyType } from '../Energy';

// Todos os arquétipos devem estender da classe abstrata Archetype
class Mage extends Archetype {
  protected _energyType: EnergyType;

  // Cada arquétipo possui a habilidade de causar danos e deve ser inicializada em seu construtor
  constructor(name: string) {
    super(name);

    this._energyType = 'mana';

    Mage.newInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}

export default Mage;