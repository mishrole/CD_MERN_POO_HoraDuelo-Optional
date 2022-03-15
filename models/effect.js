import Unit from "./unit.js";

class Effect extends Unit {
  constructor(nombre, texto, stat, magnitud, costo) {
    super(nombre, costo);
    this.texto = texto;
    this.stat = stat.toLowerCase();
    this.magnitud = magnitud;
  }

  play (target) {
    if (target instanceof Unit) {
      let monto = Number(this.magnitud.slice(1, this.magnitud.length));
      if (this.magnitud.includes("+")) {
        target[this.stat] += monto;
      } else if (this.magnitud.includes("-")) {
        target[this.stat] -= monto;
      }

      console.log(`${this.texto} aplicado a ${target.nombre}\n- - -`);
    } else {
      throw new Error("¡El objetivo debe ser una unidad!");
    }
  }
}

export default Effect;