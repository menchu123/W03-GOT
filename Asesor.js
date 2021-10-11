import Personajes from "./Personajes.js";

class Asesor extends Personajes {
  mensaje = "No sé por qué, pero creo que voy a morir pronto";
  constructor(nombre, familia, edad, jefe) {
    super(nombre, familia, edad);
    this.jefe = jefe;
  }
}

export default Asesor;
