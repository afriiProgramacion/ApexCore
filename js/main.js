// ===== Helpers =====
function obtenerEscuderia(id) {
  return (typeof escuderias !== "undefined" ? escuderias : []).find((e) => e.id === id);
}

// ===== Modal (ventanita) =====
function abrirModal(contenidoHTML) {
  cerrarModal();
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-contenido" role="dialog" aria-modal="true">
      <button type="button" class="modal-cerrar" aria-label="Cerrar">&times;</button>
      <div class="modal-cuerpo">${contenidoHTML}</div>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  const cerrar = () => cerrarModal();
  overlay.querySelector(".modal-cerrar").addEventListener("click", cerrar);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) cerrar();
  });
  const onKey = (e) => {
    if (e.key === "Escape") {
      cerrar();
      document.removeEventListener("keydown", onKey);
    }
  };
  document.addEventListener("keydown", onKey);
}

function cerrarModal() {
  const overlay = document.querySelector(".modal-overlay");
  if (overlay) {
    overlay.remove();
    document.body.style.overflow = "";
  }
}
const contenedorPilotos = document.getElementById("contenedor-pilotos");

function renderPilotos(lista) {
  if (!contenedorPilotos) return;
  contenedorPilotos.innerHTML = "";
  if (!lista || lista.length === 0) {
    contenedorPilotos.innerHTML = "<p>No se encontraron pilotos.</p>";
    return;
  }
  lista.forEach((piloto) => {
    const escuderia = obtenerEscuderia(piloto.escuderiaId);
    const pilotoDiv = document.createElement("div");
    pilotoDiv.classList.add("piloto");
    if (escuderia) {
      pilotoDiv.style.borderTopColor = escuderia.color;
    }
    pilotoDiv.innerHTML = `
      <img src="${piloto.foto}" alt="${piloto.nombre}" class="piloto-foto" loading="lazy">
      <h2>${piloto.nombre}</h2>
      <p>Dorsal: ${piloto.dorsal} · ${piloto.siglas}</p>
      <p>${escuderia ? escuderia.nombre : (piloto.equipo || "")}</p>
      <p class="piloto-nac">${piloto.nacionalidad || piloto.pais || ""}</p>
    `;
    pilotoDiv.addEventListener("click", () => {
      const esc = obtenerEscuderia(piloto.escuderiaId);
      const fichaHTML = `
        <h2>${piloto.nombre}</h2>
        <img src="${piloto.foto}" alt="${piloto.nombre}" class="piloto-foto-detalle">
        <p><strong>Dorsal:</strong> ${piloto.dorsal}</p>
        <p><strong>Siglas:</strong> ${piloto.siglas}</p>
        <p><strong>Equipo (Escudería):</strong> ${esc ? esc.nombre : (piloto.equipo || "—")}</p>
        <p><strong>Nacionalidad (País):</strong> ${piloto.nacionalidad || piloto.pais || "—"}</p>
      `;
      const detallePiloto = document.getElementById("detalle-piloto");
      if (detallePiloto) detallePiloto.innerHTML = fichaHTML + '<button type="button" onclick="this.parentElement.innerHTML=\'\'">Cerrar</button>';
      abrirModal(fichaHTML);
    });
    contenedorPilotos.appendChild(pilotoDiv);
  });
}

if (contenedorPilotos) {
  renderPilotos(typeof pilotos !== "undefined" ? pilotos : []);

  const inputBusqueda = document.getElementById("busqueda-pilotos");
  const selectEscuderia = document.getElementById("filtro-escuderia");

  // Rellenar select de escuderías
  if (selectEscuderia && typeof escuderias !== "undefined") {
    escuderias.forEach((esc) => {
      const opt = document.createElement("option");
      opt.value = esc.id;
      opt.textContent = esc.nombre;
      selectEscuderia.appendChild(opt);
    });
  }

  function aplicarFiltros() {
    const texto = (inputBusqueda ? inputBusqueda.value : "").trim().toLowerCase();
    const escId = selectEscuderia ? selectEscuderia.value : "";
    const filtrados = (typeof pilotos !== "undefined" ? pilotos : []).filter((p) => {
      const esc = obtenerEscuderia(p.escuderiaId);
      const coincideTexto =
        !texto ||
        p.nombre.toLowerCase().includes(texto) ||
        (p.siglas || "").toLowerCase().includes(texto) ||
        (esc && esc.nombre.toLowerCase().includes(texto));
      const coincideEsc = !escId || p.escuderiaId === escId;
      return coincideTexto && coincideEsc;
    });
    renderPilotos(filtrados);
  }

  if (inputBusqueda) inputBusqueda.addEventListener("input", aplicarFiltros);
  if (selectEscuderia) selectEscuderia.addEventListener("change", aplicarFiltros);
}

// ===== Escuderías =====
const contenedorEscuderias = document.getElementById("contenedor-escuderias");
if (contenedorEscuderias) {
  (typeof escuderias !== "undefined" ? escuderias : []).forEach((escuderia) => {
    const escuderiaDiv = document.createElement("div");
    escuderiaDiv.classList.add("escuderia");
    escuderiaDiv.style.borderTopColor = escuderia.color;
    escuderiaDiv.innerHTML = `
      <h2>${escuderia.nombre}</h2>
      <p>${escuderia.color}</p>
    `;
    escuderiaDiv.addEventListener("click", () => {
      const pilotosEsc = (typeof pilotos !== "undefined" ? pilotos : []).filter((p) => p.escuderiaId === escuderia.id);
      const fichaHTML = `
        <h2>${escuderia.nombre}</h2>
        <p><strong>Color:</strong> ${escuderia.color}</p>
        <p><strong>Pilotos:</strong> ${pilotosEsc.length ? pilotosEsc.map((p) => p.nombre).join(", ") : "—"}</p>
      `;
      const detalleEscuderia = document.getElementById("detalle-escuderia");
      if (detalleEscuderia) detalleEscuderia.innerHTML = fichaHTML + '<button type="button" onclick="this.parentElement.innerHTML=\'\'">Cerrar</button>';
      abrirModal(fichaHTML);
    });
    contenedorEscuderias.appendChild(escuderiaDiv);
  });
}
