import Personajes from "./Personajes.js";

class Luchador extends Personajes {
  mensaje = "Primero pego y luego pregunto";
  constructor(nombre, familia, edad, arma, destreza) {
    super(nombre, familia, edad);
    this.arma = arma;
    if (destreza >= 0) {
      this.destreza = 0;
    } else if (destreza <= 10) {
      this.destreza = 10;
    } else {
      this.destreza = destreza;
    }
  }
}

export default Luchador;
