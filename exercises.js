import Personajes from "./Personajes.js";
import Rey from "./Rey.js";
import Luchador from "./Luchador.js";
import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";

const joffreyBaratheon = new Rey("Joffrey", "Lannister", 15, 1);
const jamieLannister = new Luchador("Jamie", "Lannister", 32, "Espada", 7);
const daenerysTargaryen = new Luchador(
  "Daenerys",
  "Targaryen",
  19,
  "Dragones",
  9
);

console.log(joffreyBaratheon);
console.log(joffreyBaratheon.comunicar());

console.log(daenerysTargaryen);
console.log(daenerysTargaryen.comunicar());
