import {cargarAboutUs} from "./pages/aboutus.js";
import {cargarMenu} from "./pages/menu.js";

const aboutus = document.querySelector("#aboutus");
const menu = document.querySelector("#menu");
const home = document.querySelector("#home");

const contenedor = document.querySelector("#content");

menu.addEventListener("click", () => { 
    contenedor.replaceChildren();
    cargarMenu(contenedor); });

aboutus.addEventListener("click", () => { 
    contenedor.replaceChildren();
    cargarAboutUs(contenedor); });

home.addEventListener("click", () => { 
    contenedor.replaceChildren();
    cargarHome(contenedor); });

function cargarHome(contenedor) { 
    contenedor.className = "home";
    const titulo = document.createElement("h1");
    const gato = document.createElement("img");
    const leyenda = document.createElement("p");

    titulo.textContent = "Hola soy Jano y mi gato";
    gato.src = "./images/maestro_felix.jpg";
    leyenda.textContent = "La leyenda, mi gato Felix";

    contenedor.append(titulo,gato,leyenda);
};

cargarHome(contenedor);


