import Personajes from "./Personajes.js";

class Escudero extends Personajes {
  mensaje = "Soy un loser";
  constructor(nombre, familia, edad, jefe, pelotismo) {
    super(nombre, familia, edad);
    this.jefe = "Luchador";
    this.pelotismo = pelotismo;
  }
}

export default Escudero;
