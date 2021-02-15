<template>
  <div v-if="!isLogged" class="container">
    <div class="row mb-2">
      <div class="col-6 col-sm-3 col-md-3 col-lg-2 aligne-items-center">
        <span class="text-light">Filtros </span>
        <input
          id="btnOnOffSearch"
          type="checkbox"
          data-toggle="toggle"
          data-onstyle="success"
          data-offstyle="danger"
        />
      </div>
      <div
        id="ddSearch"
        class="col-6 col-sm-3 col-md-2 col-lg-2 btn-group filter-display-none"
      >
        <button
          type="button"
          class="btn btn-danger dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Columna
        </button>
        <div id="ddFilter" class="dropdown-menu">
          <a class="dropdown-item" href="#">Nombre</a>
          <a class="dropdown-item" href="#">Pais</a>
          <a class="dropdown-item" href="#">Ocupacion</a>
        </div>
      </div>
      <div
        id="barSearch"
        class="col-12 col-sm-6 col-md-7 col-lg-8 filter-display-none"
      >
        <form class="form-inline">
          <input
            id="inputSearch"
            class="form-control col-sm-10 col-10"
            type="search"
            placeholder="Seleccione Columna"
            aria-label="Buscar"
            autocomplete="off"
          />
          <a
            id="btnbarSearch"
            class="ml-2 btn btn-light col-lg-1 col-sm-2 col-2"
            data-action="search"
          >
            <img
              src="../assets/images/search.svg"
              width="20"
              height="20"
              alt="Buscar"
              data-action="search"
              title="Buscar Socio"
            />
          </a>
        </form>
      </div>
    </div>
    <div class="row mb-2 justify-content-center">
      <div class="col">
        <h2 class="text-white"><b>Socios</b></h2>
      </div>
      <div class="col-2">
        <a
          href="#addModal"
          id="btnAdd"
          class="btn btn-success btn-sm"
          data-action="loadAdd"
          data-toggle="modal"
          >Agregar Nuevo
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
    <table class="table table-borderless">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Apellido y Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Ocupación</th>
          <th scope="col">Pais</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody class="bg-white text-dark">
        <tr v-for="item in personasArray" :key="item.id">
          <th scope="row">{{ item.nombre }}</th>
          <td>{{ item.edad }}</td>
          <td>{{ item.ocupacion }}</td>
          <td>{{ item.pais }}</td>
          <td>
            <a class="btn btn-warning btn-sm">
              <img
                src="../assets/images/pencil.svg"
                width="20"
                height="20"
                alt="Cambiar"
                title="Editar Seleccionado"
              />
              <!-- @click="toggleItem(todo.id)" -->
            </a>
            <a class="btn btn-danger btn-sm">
              <img
                src="../assets/images/trash.svg"
                width="20"
                height="20"
                alt="Borrar"
                title="Borrar Seleccionado"
              />
              <!-- @click="deleteItem(todo.id)" -->
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
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
    };
  },
  mounted: {
    //personas: personasArray,
  },
  computed: {
    ...mapState(["isLogged"]),
  },
  methods: {},
};
</script>

<style>
@import "../assets/css/bootstrap4-toggle.min.css";
</style>