window.addEventListener("load", () => {
  let tabla = document.getElementById("tablesoc");
  tabla.setAttribute("class", "table table-striped table-hover");
  DatosTabla("tablesoc", personas);
});

// Creacion de Tabla
function DatosTabla(tabla, datos) {
  createTThead(tabla);
  createTBody(tabla, datos);
  btnClicks();
  AcctionsCheck();
}
