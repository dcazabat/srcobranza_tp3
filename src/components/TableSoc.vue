<template>
  <div v-if="isLogged" class="container-xl">
    <div class="row">
      <div class="col-6 col-sm-3 col-md-3 col-lg-2 aligne-items-center">
        <span class="text-light">Filtros </span>
        <toggle-button
          :value="isFilter"
          color="#61FF33"
          background-color="#61FF33"
          :labels="true"
          @change="toggleFilter"
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
              <button class="btn btn-danger" @click="DelSelectedItem">
                <img
                  src="../assets/images/trash.svg"
                  width="20"
                  height="20"
                  alt="Borrar Selected"
                  data-action="delAllItems"
                  title="Borrar Socios Seleccionados"
                />
              </button>
              <a
                href="#showFormModal"
                class="btn btn-success"
                data-toggle="modal"
                @click="AddItem"
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
                <spam class="custom-checkbox" :name="'spam' + item.id"
                  ><input
                    type="checkbox"
                    :id="'checkbox' + item.id"
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
                  href="#showFormModal"
                  class="btn btn-danger btn-sm"
                  data-toggle="modal"
                  data-action="loadDelete"
                  :data-id="item.id"
                  @click="DeleteItem(item.id)"
                  ><img
                    src="../assets/images/trash.svg"
                    width="10"
                    height="10"
                    alt="Borrar"
                    title="Borrar"
                    data-action="loadDelete"
                    :data-id="item.id"
                  /> </a
                ><a
                  href="#showFormModal"
                  class="btn btn-warning btn-sm"
                  data-toggle="modal"
                  data-action="loadEdit"
                  :data-id="item.id"
                  @click="UpdateItem(item.id)"
                  ><img
                    src="../assets/images/pencil.svg"
                    width="10"
                    height="10"
                    alt="Editar"
                    title="Editar"
                    data-action="loadEdit"
                    :data-id="item.id"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ModalForm />
  </div>
</template>

<script>
import ModalForm from "./ModalForm.vue";

export default {
  name: "TableSoc",
  components: {
    ModalForm,
  },
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
      return this.$store.state.isLogged;
    },
    title() {
      return this.$store.state.title;
    },
    action() {
      return this.$$store.state.action;
    },
    showModal() {
      return this.$store.state.showModal;
    },
    record() {
      return this.$store.state.record;
    },
  },
  methods: {
    DelSelectedItem: function () {
      this.showModal = true;
    },
    AddItem: function () {
      this.$store.state.action = "add";
      this.$store.state.title = "Agregar";
      this.$store.state.record.id = 0;
      this.$store.state.record.fullname = "";
      this.$store.state.record.country = "";
      this.$store.state.record.age = 0;
      this.$store.state.record.occupation = "";
    },
    DeleteItem: function (id) {
      this.$store.state.action = "del";
      this.$store.state.title = "Eliminar";
      this.$store.state.record.id = id;
      this.$store.state.record.fullname = "";
      this.$store.state.record.country = "";
      this.$store.state.record.age = id;
      this.$store.state.record.occupation = "";
    },
    UpdateItem: function (id) {
      this.$store.state.action = "edit";
      this.$store.state.title = "Editar";
      this.$store.state.record.id = id;
      this.$store.state.record.fullname = "";
      this.$store.state.record.country = "";
      this.$store.state.record.age = id;
      this.$store.state.record.occupation = "";
    },
    toggleFilter: function () {
      this.isFilter = !this.isFilter;
    },
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