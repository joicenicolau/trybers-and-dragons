// é necessário criar um tipo novo, o type EnergyType
// Esse novo tipo pode deve receber os valores: 'mana' ou 'stamina'
type EnergyType = 'mana' | 'stamina';

// Crie uma interface chamada Energy
interface Energy {
  // A interface deverá possuir os atributos
  // type_, do tipo EnergyType;
  type_: EnergyType;
  // amount, do tipo number
  amount: number;
}

export { EnergyType };
export default Energy;