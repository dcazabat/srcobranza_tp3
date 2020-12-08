let estoyFiltrando = false;
let personasFiltrado = [];

function createTThead(tableId) {
  let ttable = document.getElementById(tableId);

  let theader = document.createElement("thead");

  let tr = document.createElement("tr");

  let thcheck = document.createElement("th");
  let thcheckspam = document.createElement("spam");
  thcheckspam.setAttribute("class", "custom-checkbox");
  let thcheckspamimput = document.createElement("input");
  thcheckspamimput.setAttribute("type", "checkbox");
  thcheckspamimput.setAttribute("id", "selectAll");
  thcheckspam.appendChild(thcheckspamimput);
  let thcheckspamlabel = document.createElement("label");
  thcheckspamlabel.setAttribute("for", "selectAll");
  thcheckspam.appendChild(thcheckspamlabel);
  thcheck.appendChild(thcheckspam);
  tr.appendChild(thcheck);

  let thnombre = document.createElement("th");
  thnombre.innerHTML = "Nombre";
  tr.appendChild(thnombre);

  let thepais = document.createElement("th");
  thepais.innerHTML = "Pais";
  tr.appendChild(thepais);
  let thedad = document.createElement("th");
  thedad.innerHTML = "Edad";
  tr.appendChild(thedad);
  let thocupacion = document.createElement("th");
  thocupacion.innerHTML = "Ocupacion";
  tr.appendChild(thocupacion);
  let thacciones = document.createElement("th");
  thacciones.innerHTML = "Acciones";
  tr.appendChild(thacciones);

  theader.appendChild(tr);

  ttable.appendChild(theader);
  return ttable;
}

function createTBody(tableId, arrayElemnet) {
  let ttable = document.getElementById(tableId);

  let tbody = document.createElement("tbody");
  const w_buttons = "10";
  const h_buttons = "10";

  for (let i = 0; i < arrayElemnet.length; i++) {
    let tr = document.createElement("tr");
    // CheckBox
    let thcheck = document.createElement("th");
    let thcheckspam = document.createElement("spam");
    thcheckspam.setAttribute("class", "custom-checkbox");
    let thcheckspamimput = document.createElement("input");
    thcheckspamimput.setAttribute("type", "checkbox");
    thcheckspamimput.setAttribute("id", "checkbox" + i);
    thcheckspamimput.setAttribute("name", "options[]");
    thcheckspamimput.setAttribute("value", i);
    thcheckspam.appendChild(thcheckspamimput);
    let thcheckspamlabel = document.createElement("label");
    thcheckspamlabel.setAttribute("for", "checkbox" + i);
    thcheckspam.appendChild(thcheckspamlabel);
    thcheck.appendChild(thcheckspam);
    tr.appendChild(thcheck);

    // Items
    let tdnombre = document.createElement("td");
    tdnombre.innerHTML = arrayElemnet[i].nombre;
    tr.appendChild(tdnombre);
    let tdpais = document.createElement("td");
    tdpais.innerHTML = arrayElemnet[i].pais;
    tr.appendChild(tdpais);
    let tdedad = document.createElement("td");
    tdedad.innerHTML = arrayElemnet[i].edad;
    tr.appendChild(tdedad);
    let tdocupacion = document.createElement("td");
    tdocupacion.innerHTML = arrayElemnet[i].ocupacion;
    tr.appendChild(tdocupacion);

    // Botones
    let tdacciones = document.createElement("td");
    let deleteIcon = document.createElement("a");
    deleteIcon.setAttribute("href", "#deleteModal");
    deleteIcon.setAttribute("class", "btn btn-danger acciones");
    deleteIcon.setAttribute("data-toggle", "modal");
    deleteIcon.setAttribute("data-action", "loadDelete");
    deleteIcon.setAttribute("data-id", i);
    let deleteIconimg = document.createElement("img");
    deleteIconimg.setAttribute("src", "../assest/images/trash.svg");
    deleteIconimg.setAttribute("width", w_buttons);
    deleteIconimg.setAttribute("height", h_buttons);
    deleteIconimg.setAttribute("alt", "Borrar");
    deleteIconimg.setAttribute("title", "Borrar");
    deleteIconimg.setAttribute("data-action", "loadDelete");
    deleteIconimg.setAttribute("data-id", i);
    deleteIcon.appendChild(deleteIconimg);
    tdacciones.appendChild(deleteIcon);

    let editIcon = document.createElement("a");
    editIcon.setAttribute("href", "#editModal");
    editIcon.setAttribute("class", "btn btn-warning acciones");
    editIcon.setAttribute("data-toggle", "modal");
    editIcon.setAttribute("data-action", "loadEdit");
    editIcon.setAttribute("data-id", i);
    let editIconimg = document.createElement("img");
    editIconimg.setAttribute("src", "../assest/images/pencil.svg");
    editIconimg.setAttribute("width", w_buttons);
    editIconimg.setAttribute("height", h_buttons);
    editIconimg.setAttribute("alt", "Editar");
    editIconimg.setAttribute("title", "Editar");
    editIconimg.setAttribute("data-action", "loadEdit");
    editIconimg.setAttribute("data-id", i);
    editIcon.appendChild(editIconimg);
    tdacciones.appendChild(editIcon);

    tr.appendChild(tdacciones);
    tbody.appendChild(tr);
  }
  ttable.appendChild(tbody);
  return ttable;
}


function AcctionsCheck() {
  // Seleccion o Desselecciona checkboxes
  let checkbox = $('table tbody input[type="checkbox"]');
  $("#selectAll").click(function () {
    if (this.checked) {
      checkbox.each(function () {
        this.checked = true;
      });
    } else {
      checkbox.each(function () {
        this.checked = false;
      });
    }
  });
  checkbox.click(function () {
    if (!this.checked) {
      $("#selectAll").prop("checked", false);
    }
  });
}

function ifCheckedforDelete() {
  let checkbox = $('table tbody input[type="checkbox"]');
  let arrayProcess = [];
  checkbox.each(function () {
    if (this.checked) {
      arrayProcess.push(this.value);
    }
  });
  return arrayProcess;
}

function btnClicks() {
  // let btnProgress = document.getElementById('btnProgress');
  // btnProgress.addEventListener('click', progressBarViewHide);
  let btnEditElement = document.getElementsByClassName("acciones");

  for (let i = 0; i < btnEditElement.length; i++) {
    btnEditElement[i].removeEventListener("click", actions);
    btnEditElement[i].addEventListener("click", actions);
  }
}

function actions(e) {
  let persona = personas[e.target.dataset.id];
  let tabla = document.getElementById("tablesoc");
  jQuery.noConflict();
  let arrayElementDel = ifCheckedforDelete;
  switch (e.target.dataset.action) {
    case "loadDeleteAll":
      // console.log("Eliminar TODOS");
      if (arrayElementDel.length > 0) {
        $("#deleteModalAll").modal("show");
      } else {
        alert("No hay Items Seleccionados !!!!");
      }
      break;
    case "loadAdd":
      // console.log("Limpio los Datos");
      document.getElementById("idA").setAttribute("value", personas.length + 1);
      document.getElementById("apellidoA").setAttribute("value", "");
      document.getElementById("paisA").setAttribute("value", "");
      document.getElementById("edadA").setAttribute("value", "");
      document.getElementById("ocupacionA").setAttribute("value", "");
      break;
    case "loadEdit":
      // console.log("Cargo los datos a Editar");
      document.getElementById("idE").setAttribute("value", e.target.dataset.id);
      document
        .getElementById("apellidoE")
        .setAttribute("value", persona.nombre);
      document.getElementById("paisE").setAttribute("value", persona.pais);
      document.getElementById("edadE").setAttribute("value", persona.edad);
      document
        .getElementById("ocupacionE")
        .setAttribute("value", persona.ocupacion);
      break;
    case "loadDelete":
      // console.log("Cargo los datos para Eliminar", e.target.dataset.id);
      document.getElementById("idD").setAttribute("value", e.target.dataset.id);
      document
        .getElementById("apellidoD")
        .setAttribute("value", persona.nombre);
      document.getElementById("paisD").setAttribute("value", persona.pais);
      document.getElementById("edadD").setAttribute("value", persona.edad);
      document
        .getElementById("ocupacionD")
        .setAttribute("value", persona.ocupacion);
      break;
    case "add":
      // console.log("Click en Aceptar de Agregar");
      progressBarViewHide();
      personas.push({
        id: parseInt(document.getElementById("idA").value),
        nombre: document.getElementById("apellidoA").value,
        pais: document.getElementById("paisA").value,
        edad: parseInt(document.getElementById("edadA").value),
        ocupacion: document.getElementById("ocupacionA").value,
      });
      tabla.innerHTML = "";
      DatosTabla("tablesoc", personas);
      break;
    case "edit":
      // console.log("Click en Aceptar de Editar");
      progressBarViewHide();
      let mid = document.getElementById("idE").value;
      personas[mid].nombre = document.getElementById("apellidoE").value;
      personas[mid].pais = document.getElementById("paisE").value;
      personas[mid].edad = document.getElementById("edadE").value;
      personas[mid].ocupacion = document.getElementById("ocupacionE").value;
      tabla.innerHTML = "";
      DatosTabla("tablesoc", personas);
      break;
    case "delete":
      // console.log("Click en Aceptar de Eliminar");
      progressBarViewHide();
      tabla.innerHTML = "";
      let idDel = parseInt(
        document.getElementById("idD").getAttribute("value")
      );
      personas.splice(idDel, 1);
      DatosTabla("tablesoc", personas);
      break;
    case "deleteAll":
      // console.log("Click en Aceptar de Eliminar Todo");
      progressBarViewHide();
      arrayElementDel.reverse();
      console.log(arrayElementDel.length, arrayElementDel);
      arrayElementDel.forEach((element) => {
        //parseInt(element);
        personas.splice(parseInt(element), 1);
      });
      tabla.innerHTML = "";
      DatosTabla("tablesoc", personas);
      break;
    case "search":
      console.log('Evento Click en Case');
      break;
    default:
      break;
  }
}

function progressBarViewHide() {
  let progressBar = document.getElementById("progressBar");
  const timeViewProgressBar = 2;

  progressBar.setAttribute("aria-valuenow", 0);
  progressBar.style.width = `0%`;

  let timeEnd = timeViewProgressBar * 1000;
  let increment = 100 / timeViewProgressBar;

  jQuery.noConflict();
  jQuery("#progressBarModal").modal("show");

  const interval = setInterval(function () {
    let value = parseInt(progressBar.getAttribute("aria-valuenow"));

    if (value < parseInt(progressBar.getAttribute("aria-valuemax"))) {
      value = value + increment;
      progressBar.setAttribute("aria-valuenow", value);
      progressBar.style.width = `${value}%`;
    } else {
      clearInterval(interval);
      jQuery("#progressBarModal").modal("hide");
    }
  }, timeEnd);
}

// Elemneto Toggle para Mostrar o Ocultar las opciones de busqueda
// lo inicializa en ON
let btnOnOff = document.getElementById('btnOnOffSearch');
btnOnOff.checked = true;

// Mustra u Oculta lo de la busqueda y se le asigna al evento Change
// No anda con Listener
function onoffBtn(e) {
  $('#btnOnOffSearch').change(function() {
    onOffElement('ddSearch')
    onOffElement('barSearch')
  })
}

// Funcion que se llama
function onOffElement(element) {
  var el = document.getElementById(element);
  if (el.style.display === "none") {
      el.style.display = "block";
  } else {
      el.style.display = "none";
  }
}

// Traabajo con el DropDown
let filtername = "";


let ddSearch = document.getElementsByClassName('dropdown-item')
//ddSearch.forEach(element => console.log(element))
for (let i = 0; i < ddSearch.length; i++) {
  ddSearch[i].addEventListener('click',(e) => {
//    console.log('Click en Menu', e.target.textContent.toLocaleLowerCase())
    document.getElementById('inputSearch').value = '';
    document.getElementById('inputSearch').setAttribute('placeholder',`Buscar por ${e.target.textContent}`)
    filtername = e.target.textContent.toLowerCase();
  })
}

let inputSearch = document.getElementById('inputSearch');
inputSearch.value = "";

// Trabajo con Boton Buscar

let btnBuscar = document.getElementById('btnbarSearch')
btnBuscar.addEventListener('click', () => {
  personasFiltrado = searchFilter(inputSearch.value);
  document.getElementById("tablesoc").innerHTML = "";
  DatosTabla("tablesoc", personasFiltrado);
})

function searchFilter(condition) {
  console.log(condition)
  return personas.filter(person => person.pais.toLowerCase().includes(condition.toLowerCase()));
}


// FILTROS variable global para saber si estoy filtrando o no y eso me indica que array uso.
// SINO ESTOY FILTRANDO el Array de datos filtrados NO debe tener elementos!!!

// En caso de filtrar debo buscar en el array original el elemento y eliminarlo y editarlo, en caso de agregar idem