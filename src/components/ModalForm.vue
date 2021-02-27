<template>
  <div id="showFormModal" tabindex="-1" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h4 class="modal-title">{{ title | upper }} Socio</h4>
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
                v-model="record.fullname"
                :disabled="action == 'del'"
              />
              <div v-if="firstUp" class="text-left mb-0">
                <small v-if="!$v.record.fullname.required" class="text-danger"
                  >Apellido y Nombre es Requerido</small
                >
              </div>
            </div>
            <div class="form-group">
              <label>Pais</label>
              <input
                type="text"
                id="paisA"
                class="form-control"
                required
                autocomplete="off"
                v-model="record.country"
                :disabled="action == 'del'"
              />
              <div v-if="firstUp" class="text-left mb-0">
                <small v-if="!$v.record.country.required" class="text-danger"
                  >Pais es Requerido</small
                >
              </div>
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
                v-model="record.age"
                :disabled="action == 'del'"
              />
              <div v-if="firstUp" class="text-left mb-0">
                <small v-if="!$v.record.age.required" class="text-danger"
                  >Edad es Requerido</small
                >
                <small v-if="!$v.record.age.between" class="text-danger"
                  >La Edad debe estar entre 18 y 100 años</small
                >
              </div>
            </div>
            <div class="form-group">
              <label>Ocupacion</label>
              <input
                type="text"
                id="ocupacionA"
                class="form-control"
                required
                autocomplete="off"
                v-model="record.occupation"
                :disabled="action == 'del'"
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
              class="btn btn-success"
              data-dismiss="modal"
              data-action="add"
              value="Aceptar"
              :disabled="$v.$invalid"
              @click="RecordSave(action)"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, between } from "vuelidate/lib/validators";

export default {
  name: "FormModal",
  props: {
    isSelectColumn: String,
    inputSearch: String,
  },
  data() {
    return { firstUp: false };
  },
  beforeUpdate() {
    switch (this.action) {
      case "add":
        //Agrega un Item
        this.firstUp = false;
        break;
      case "edit":
        //Edita un Item
        this.firstUp = true;
        break;
      default:
        break;
    }
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    action() {
      return this.$store.state.action;
    },
    record() {
      return this.$store.state.record;
    },
  },
  methods: {
    RecordSave(action) {
      //Falta agregar los Fetch a  Firebase, con la estructura de Record que esta
      // en el State del Store
      this.$v.$touch();
      this.firstUp = true;
      if (this.$v.$invalid) {
        return false;
      } else {
        switch (action) {
          case "add":
            //Agrega un Item
            this.$store.dispatch("postPerson", { record: this.record });
            break;
          case "del":
            //Borra un Item
            this.$store.dispatch("deletePerson", { personId: this.record.id });
            break;
          case "edit":
            //Edita un Item
            this.$store.dispatch("updatePerson", { personId: this.record });
            break;
          default:
            break;
        }
        if (this.$store.state.filterState) {
          this.$store.dispatch("getFilterPersons", {
            column: this.isSelectColumn,
            textsearch: this.inputSearch,
          });
        } else {
          this.$store.dispatch("getAllPersons");
        }
        this.$store.state.showProgressBar = true;
      }
    },
  },
  validations: {
    record: {
      fullname: {
        required,
      },
      country: {
        required,
      },
      age: {
        required,
        between: between(18, 100),
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>