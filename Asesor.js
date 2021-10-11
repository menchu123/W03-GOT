import Personajes from "./Personajes.js";
import Rey from "./Rey.js";
import Luchador from "./Luchador.js";
import Escudero from "./Escudero.js";

class Asesor extends Personajes {
  mensaje = "No sé por qué, pero creo que voy a morir pronto";
  constructor(nombre, familia, edad, jefe) {
    super(nombre, familia, edad);

    if (
      jefe instanceof Rey ||
      jefe instanceof Luchador ||
      jefe instanceof Asesor ||
      jefe instanceof Escudero
    ) {
      this.jefe = jefe;
    }
  }
}

export default Asesor;
