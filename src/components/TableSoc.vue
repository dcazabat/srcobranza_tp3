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
          <option value="fullName">Nombre</option>
          <option value="country">Pais</option>
          <option value="occupation">Ocupacion</option>
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
            @click.prevent="btnSearch"
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
                href="#deleteModalAll"
                class="btn btn-danger"
                data-toggle="modal"
              >
                <img
                  src="../assets/images/trash.svg"
                  width="20"
                  height="20"
                  alt="Borrar Selected"
                  data-action="delAllItems"
                  title="Borrar Socios Seleccionados"
                />
              </a>
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
                <span class="custom-checkbox"
                  ><input
                    type="checkbox"
                    id="selectAll"
                    v-model="isCheckAll" /><label for="selectAll"></label
                ></span>
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
                <span class="custom-checkbox" :name="'span' + item.id"
                  ><input
                    type="checkbox"
                    :id="item.id"
                    :value="item.id" /><label :for="item.id"></label
                ></span>
              </th>
              <td scope="row">{{ item.fullname | upper }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.occupation | capitalize }}</td>
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
    <!-- Delete Modal All-->
    <div id="deleteModalAll" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">Eliminar TODOS LOS SOCIOS</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <p>Usted esta seguro que descea Eliminar TODOS los Socios?</p>
              <p class="text-warning">
                <small>Esta Acción no se puede REVERTIR.</small>
              </p>
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
                class="btn btn-danger acciones"
                data-dismiss="modal"
                data-action="deleteAll"
                value="Aceptar"
                @click.prevent="DelSelectedItem"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <ModalForm :inputSearch="inputSearch" :isSelectColumn="isSelectColumn" />
    <vue-topprogress ref="topProgress"></vue-topprogress>
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
      isFilter: false,
      isCheckAll: false,
      inputSearch: "",
      inputSearchPlaceHolder: "Seleccione Columna",
      isSelectColumn: "Columnas...",
      isEnabledSearch: false,
    };
  },
  watch: {
    isFilter: function () {
      this.inputSearch = "";
      this.$store.dispatch("getAllPersons");
      this.isSelectColumn = "Columnas...";
      this.isEnabledSearch = false;
    },
    isSelectColumn: function (val) {
      let msgPlaceHolder = "";
      this.inputSearch = "";
      if (val != "Columnas...") {
        this.isEnabledSearch = true;
        switch (val) {
          case "fullName":
            msgPlaceHolder = "Nombre";
            break;
          case "country":
            msgPlaceHolder = "Pais";
            break;
          case "occupation":
            msgPlaceHolder = "Ocupacion";
            break;
          default:
            break;
        }
        this.inputSearchPlaceHolder = `Buscar por ${msgPlaceHolder}`;
      } else {
        this.inputSearch = "";
        this.isEnabledSearch = false;
        this.inputSearchPlaceHolder = `Seleccione Columna`;
        this.$store.dispatch("getAllPersons");
      }
    },
    isCheckAll: function (val) {
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
    record() {
      return this.$store.state.record;
    },
    personasArray() {
      return this.$store.state.personas;
    },
  },
  // Ciclo de vida del Componente
  mounted() {
    this.$store.dispatch("getAllPersons");
  },
  beforeUpdate() {
    if (this.$store.state.showProgressBar) {
      this.$refs.topProgress.start();

      setTimeout(() => {
        this.$store.state.showProgressBar = false;
        this.$refs.topProgress.done();
        if (this.isEnabledSearch) {
          this.$store.dispatch("getFilterPersons", {
            column: this.isSelectColumn,
            textsearch: this.inputSearch,
          });
        } else {
          this.$store.dispatch("getAllPersons");
        }
      }, 2000);
    }
  },
  methods: {
    DelSelectedItem: function () {
      let checkbox = document.getElementsByClassName("custom-checkbox");
      for (let index = 0; index < checkbox.length; index++) {
        const element = checkbox[index].children[0];
        if (element.checked) {
          this.$store.dispatch("deletePerson", { personId: element.value });
        }
      }
    },
    AddItem: function () {
      this.$store.commit("setfilterState", { value: this.isFilter });
      this.$store.state.action = "add";
      this.$store.state.title = "Agregar";
      this.$store.dispatch("getPersonById", { id: 0 });
    },
    DeleteItem: function (id) {
      this.$store.commit("setfilterState", { value: this.isFilter });
      this.$store.state.action = "del";
      this.$store.state.title = "Eliminar";
      this.$store.dispatch("getPersonById", { id });
    },
    UpdateItem: function (id) {
      this.$store.commit("setfilterState", { value: this.isFilter });
      this.showModal = true;
      this.$store.state.action = "edit";
      this.$store.state.title = "Editar";
      this.$store.dispatch("getPersonById", { id });
    },
    toggleFilter: function () {
      this.isFilter = !this.isFilter;
    },
    btnSearch: function () {
      this.$store.dispatch("getFilterPersons", {
        column: this.isSelectColumn,
        textsearch: this.inputSearch,
      });
    },
    AcctionsCheck: function (val) {
      // Seleccion o Desselecciona checkboxes
      let checkbox = document.getElementsByClassName("custom-checkbox");
      for (let index = 0; index < checkbox.length; index++) {
        const element = checkbox[index].children[0];
        element.checked = val;
      }
    },
  },
};
</script>

<style>
@import "../assets/css/tablestyle.css";
</style>
