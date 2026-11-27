export function cargarAboutUs(contenedor) {
    contenedor.className = "about-us";
    const cocineros = document.createElement("div");

    const cocinero_1 = document.createElement("div");
    const foto_cocinero_1 = document.createElement("img");
    foto_cocinero_1.src = "images/maestro_felix.jpg";
    const nombre_cocinero_1 = document.createElement("p");
    nombre_cocinero_1.textContent = "Gatito Felix!!";

    cocinero_1.append(foto_cocinero_1,nombre_cocinero_1);


    const cocinero_2 = document.createElement("div");
    const foto_cocinero_2 = document.createElement("img");
    foto_cocinero_2.src = "images/maestro_ebru.jpg";
    const nombre_cocinero_2 = document.createElement("p");
    nombre_cocinero_2.textContent = "Maestro Petu!!";
    cocinero_2.append(foto_cocinero_2,nombre_cocinero_2);

    cocineros.append(cocinero_1,cocinero_2);
    contenedor.append(cocineros);
}


