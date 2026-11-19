const contenedorPilotos = document.getElementById("contenedor-pilotos");
if (contenedorPilotos) {
    pilotos.forEach((piloto) => {
        const pilotoDiv = document.createElement("div");
        pilotoDiv.classList.add("piloto");
        pilotoDiv.innerHTML = `
            <h2>${piloto.nombre}</h2>
            <p>${piloto.equipo}</p>
        `;
        pilotoDiv.addEventListener("click", () => {
            const detallePiloto = document.getElementById("detalle-piloto");
            if (detallePiloto) {
                detallePiloto.innerHTML = `
                    <h2>${piloto.nombre}</h2>
                    <p>${piloto.equipo}</p>
                    <p>${piloto.nacionalidad}</p>
                `;
            }
        });
        contenedorPilotos.appendChild(pilotoDiv);
    });
}

const contenedorEscuderias = document.getElementById("contenedor-escuderias");
if (contenedorEscuderias) {
    escuderias.forEach((escuderia) => {
        const escuderiaDiv = document.createElement("div");
        escuderiaDiv.classList.add("escuderia");
        escuderiaDiv.innerHTML = `
            <h2>${escuderia.nombre}</h2>
            <p>${escuderia.color}</p>
        `;
        escuderiaDiv.addEventListener("click", () => {
            const detalleEscuderia = document.getElementById("detalle-escuderia");
            if (detalleEscuderia) {
                detalleEscuderia.innerHTML = `
                    <h2>${escuderia.nombre}</h2>
                    <p>${escuderia.color}</p>
                `;
            }
        });
        contenedorEscuderias.appendChild(escuderiaDiv);
    });
}
