import Personajes from "./Personajes.js";

class Luchador extends Personajes {
  mensaje = "Primero pego y luego pregunto";
  constructor(nombre, familia, edad, arma, destreza) {
    super(nombre, familia, edad);
    this.arma = arma;
    this.destreza = destreza;
  }
}

export default Luchador;
