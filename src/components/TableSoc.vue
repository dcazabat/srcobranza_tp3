<template>
  <div v-if="!isLogged" class="container-xl">
    <div class="row">
      <div class="col-6 col-sm-3 col-md-3 col-lg-2 aligne-items-center">
        <span class="text-light">Filtros </span>
        <input
          id="btnOnOffSearch"
          type="checkbox"
          data-toggle="toggle"
          data-onstyle="success"
          data-offstyle="danger"
          v-model="isFilter"
        />
      </div>
      <div
        v-if="isFilter"
        id="ddSearch"
        class="col-6 col-sm-3 col-md-2 col-lg-2"
      >
        <select
          class="custom-select"
          id="selectColumn"
          v-model="isSelectColumn"
        >
          <option selected>Columnas...</option>
          <option value="nombre">Nombre</option>
          <option value="pais">Pais</option>
          <option value="ocupacion">Ocupacion</option>
        </select>
      </div>
      <div
        v-if="isFilter"
        id="barSearch"
        class="col-12 col-sm-6 col-md-7 col-lg-8 filter-display-none"
      >
        <form class="form-inline">
          <input
            id="inputSearch"
            class="form-control col-sm-10 col-10 mr-3"
            type="search"
            :placeholder="inputSearchPlaceHolder"
            :disabled="!isEnabledSearch"
            aria-label="Buscar"
            autocomplete="off"
            v-model="inputSearch"
          />
          <button
            class="btn btn-light"
            :disabled="!isEnabledSearch"
            @click="btnSearch"
          >
            <img
              src="../assets/images/search.svg"
              width="20"
              height="20"
              alt="Buscar"
              data-action="search"
              title="Aplicar Filtro"
              :disabled="!isEnabledSearch"
            />
          </button>
        </form>
      </div>
    </div>
    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-2 col-2">
              <h2><b>Socios</b></h2>
            </div>
            <div class="col-sm-10 col-10">
              <a
                href="#addModal"
                id="btnAdd"
                class="btn btn-success acciones"
                data-action="loadAdd"
                data-toggle="modal"
              >
                <img
                  src="../assets/images/add.svg"
                  width="20"
                  height="20"
                  alt="Agregar"
                  data-action="loadAdd"
                  title="Agregar Socio"
                />
              </a>
              <a
                id="btnDeleteAll"
                class="btn btn-danger acciones"
                data-action="loadDeleteAll"
                data-toggle="modal"
              >
                <img
                  src="../assets/images/trash.svg"
                  width="20"
                  height="20"
                  alt="Borrar"
                  data-action="loadDeleteAll"
                  title="Borrar Seleccionados"
                />
              </a>
            </div>
          </div>
        </div>
        <table id="tablesoc" class="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <spam class="custom-checkbox"
                  ><input
                    type="checkbox"
                    id="selectAll"
                    v-model="isCheckAll" /><label for="selectAll"></label
                ></spam>
              </th>
              <th>Nombre</th>
              <th>Pais</th>
              <th>Edad</th>
              <th>Ocupacion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in personasArray" :key="item.id">
              <th>
                <spam class="custom-checkbox"
                  ><input
                    type="checkbox"
                    :id="'checkbox' + item.id"
                    name="options[]"
                    :value="item.id" /><label
                    :for="'checkbox' + item.id"
                  ></label
                ></spam>
              </th>
              <td scope="row">{{ item.nombre }}</td>
              <td>{{ item.pais }}</td>
              <td>{{ item.edad }}</td>
              <td>{{ item.ocupacion }}</td>
              <td>
                <a
                  href="#deleteModal"
                  class="btn btn-danger btn-sm"
                  data-toggle="modal"
                  data-action="loadDelete"
                  :data-id="item.id"
                  ><img
                    src="../assets/images/trash.svg"
                    width="10"
                    height="10"
                    alt="Borrar"
                    title="Borrar"
                    data-action="loadDelete"
                    :data-id="item.id" /></a
                ><a
                  href="#editModal"
                  class="btn btn-warning btn-sm"
                  data-toggle="modal"
                  data-action="loadEdit"
                  :data-id="item.id"
                  ><img
                    src="../assets/images/pencil.svg"
                    width="10"
                    height="10"
                    alt="Editar"
                    title="Editar"
                    data-action="loadEdit"
                    :data-id="item.id"
                /></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Forms Modals, Add, Edit, Delete -->
    <!-- Add Modal -->
    <div id="addModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">Agregar Socio</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <input id="idA" type="hidden" value="" />
            <div class="modal-body">
              <div class="form-group">
                <label>Apellido y Nombre</label>
                <input
                  type="text"
                  id="apellidoA"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label>Pais</label>
                <input
                  type="text"
                  id="paisA"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label>Edad</label>
                <input
                  type="number"
                  min="0"
                  step="10"
                  id="edadA"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label>Ocupacion</label>
                <input
                  type="text"
                  id="ocupacionA"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="modal-footer">
              <input
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                value="Cancelar"
              />
              <input
                type="submit"
                class="btn btn-success acciones"
                data-dismiss="modal"
                data-action="add"
                value="Aceptar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableSoc",
  data() {
    return {
      personasArray: [
        {
          id: 1,
          nombre: "Antonio Neruda",
          pais: "Mexico",
          edad: 26,
          ocupacion: "Estudiante",
        },
        {
          id: 2,
          nombre: "Juan Ponce de Leon",
          pais: "Ecuador",
          edad: 30,
          ocupacion: "Ingeniero en sistemas",
        },
        {
          id: 3,
          nombre: "Ximena Xanders",
          pais: "Argentina",
          edad: 20,
          ocupacion: "Disenadora grafica",
        },
        {
          id: 4,
          nombre: "Alberto Contreras",
          pais: "Chile",
          edad: 29,
          ocupacion: "Gerente de operaciones",
        },
        {
          id: 5,
          nombre: "Marcela Polonio",
          pais: "Mexico",
          edad: 24,
          ocupacion: "Consultora",
        },
        {
          id: 6,
          nombre: "Carmen Di Geronimo",
          pais: "Chile",
          edad: 27,
          ocupacion: "Abogada",
        },
        {
          id: 7,
          nombre: "Salvador Padilla",
          pais: "Argentina",
          edad: 49,
          ocupacion: "Analista de datos",
        },
        {
          id: 8,
          nombre: "Marcelo Williams",
          pais: "Mexico",
          edad: 39,
          ocupacion: "Desarrollador de software",
        },
        {
          id: 9,
          nombre: "Georgina Georgalos",
          pais: "Ecuador",
          edad: 31,
          ocupacion: "Recepcionista",
        },
        {
          id: 10,
          nombre: "Gilberto Gil",
          pais: "Chile",
          edad: 23,
          ocupacion: "Calidad",
        },
      ],
      isFilter: false,
      isCheckAll: false,
      inputSearch: "",
      inputSearchPlaceHolder: "Seleccione Columna",
      isSelectColumn: "Columnas...",
      isEnabledSearch: false,
    };
  },
  watch: {
    isFilter: function (val) {
      console.log(val);
    },
    isSelectColumn: function (val) {
      console.log(val);
      this.inputSearch = "";
      if (val != "Columnas...") {
        this.isEnabledSearch = true;
        this.inputSearchPlaceHolder = `Buscar por ${val}`;
      } else {
        this.isEnabledSearch = false;
        this.inputSearchPlaceHolder = `Seleccione Columna`;
      }
    },
    isCheckAll: function (val) {
      console.log("En watch");
      this.AcctionsCheck(val);
    },
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  methods: {
    btnSearch: function () {
      console.log("Boton Buscar");
    },
    AcctionsCheck: function (val) {
      //this.isCheckAll = !this.isCheckAll;
      console.log("En function", val);
      // Seleccion o Desselecciona checkboxes
      let checkbox = document.getElementsByClassName("custom-checkbox");
      console.log(checkbox);
      for (let index = 0; index < checkbox.length; index++) {
        const element = checkbox[index].children[0];
        element.checked = val;
        console.log(element.checked);
      }
    },
  },
};

//Funciones Propias

// require("../assets/js/bootstrap4-toggle.min.js");
</script>

<style>
@import "../assets/css/tablestyle.css";
</style>