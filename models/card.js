class Card {
  constructor(nombre, costo) {
    this.nombre = nombre;
    this.costo = costo;
    console.log(`${this.nombre} es invocado`);
  }
}

export default Card;