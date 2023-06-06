import Monster from './Monster';

// A classe Dragon deve herdar de Monster
class Dragon extends Monster {
  constructor() {
    super();
    this._lifePoints = 999;
  }
}

export default Dragon;