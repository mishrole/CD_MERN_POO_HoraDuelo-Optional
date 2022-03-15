import Card from "./card.js";

class Unit extends Card {
  constructor(nombre, costo, poder, resistencia) {
    super(nombre, costo);
    this.poder = Number(poder);
    this.resistencia = resistencia;
  }

  attack(target) {
    if (target instanceof Unit) {
      target.resistencia -= this.poder;
      console.log(`${this.nombre} ataca a ${target.nombre}\n- - -`);
    } else {
      throw new Error("¡El objetivo debe ser una unidad!");
    }
  }

  getData() {
    console.log(`Estadísticas de ${this.nombre}\nCosto: ${this.costo}\nPoder: ${this.poder}\nResistencia: ${this.resistencia}\n- - - - - -`);
  }
}

export default Unit;