export function cargarMenu(contenedor) {
    contenedor.className = "menu";
    
    const contenedor_gato = document.createElement("div");
    contenedor_gato.id = "contenedor_gato";
    const whiskas = document.createElement("img");
    whiskas.src = "./images/whiskas.jpg";
    whiskas.alt = "whiskas";
    const whiskas_description = document.createElement("p");
    whiskas_description.textContent = "Alabadas sean las Whiskas";
    contenedor_gato.append(whiskas,whiskas_description);

    const contenedor_perro = document.createElement("div");
    contenedor_perro.id = "contenedor_perro";

    const pastillas = document.createElement("img");
    pastillas.src = "./images/pastillas.jpg";
    pastillas.alt = "pastillas";
    const pastillas_description = document.createElement("p");
    pastillas_description.textContent = "Alabadas sean las pastillas";
    contenedor_perro.append(pastillas,pastillas_description);

    contenedor.append(contenedor_gato,contenedor_perro);
}
