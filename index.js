import Unit from "./models/unit.js";
import Effect from "./models/effect.js";

// Turno 1
console.log('Turno 1, jugador 1\n- - -');
const ninjaRojo = new Unit("Ninja Cinturón Rojo", 3, 3, 4);
const algoritmoDificil = new Effect("Algoritmo difícil", "Aumentar la resistencia del objetivo en 3", "Resistencia", "+3", 2);
algoritmoDificil.play(ninjaRojo);
ninjaRojo.getData();

// Turno 2
console.log('Turno 2, jugador 2\n- - -');
const ninjaNegro = new Unit("Ninja Cinturón Negro", 4, 5, 4);
const rechazoPromesa = new Effect("Rechazo de promesa no manejado", "Reducir la resistencia del objetivo en 2", "Resistencia", "-2", 1);
rechazoPromesa.play(ninjaRojo);
ninjaRojo.getData();

// Turno 3
console.log('Turno 3, jugador 1\n- - -');
const programacionPareja = new Effect("Programación en pareja", "Aumentar el poder del objetivo en 2", "Poder", "+2", 3);
programacionPareja.play(ninjaRojo);
ninjaRojo.getData();

ninjaRojo.attack(ninjaNegro);
ninjaNegro.getData();