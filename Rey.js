import Personajes from "./Personajes.js";

class Rey extends Personajes {
  mensaje = "Vais a morir todos";
  constructor(nombre, familia, edad, reinado) {
    super(nombre, familia, edad);
    this.reinado = reinado;
  }
}

export default Rey;
