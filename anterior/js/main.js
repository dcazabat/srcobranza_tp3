window.addEventListener("load", () => {
  let tabla = document.getElementById("tablesoc");
  tabla.setAttribute("class", "table table-striped table-hover");
  personas = orderedArray(personas, "nombre");
  console.log(personas);
  DatosTabla("tablesoc", personas);
  AcctionsCheck();
});

// Creacion de Tabla
function DatosTabla(tabla, datos) {
  createTThead(tabla);
  createTBody(tabla, datos);
  btnClicks();
}
