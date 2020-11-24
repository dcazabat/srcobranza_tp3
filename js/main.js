window.addEventListener("load", () => {
    DatosTabla("tablesoc", personas);
  });

  // Creacion de Tabla
function DatosTabla (tabla, datos) {
    createTThead(tabla,Object.keys(datos[0]));
    createTBody(tabla, datos);
    }