class Personajes {
  vivo = true;
  serie = "Juego de Tronos";
  mensaje;

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  comunicar() {
    return this.mensaje;
  }

  morir() {
    this.vivo = false;
  }
}

export default Personajes;
