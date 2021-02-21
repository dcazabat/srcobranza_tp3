<template>
  <div id="showFormModal" tabindex="-1" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h4 class="modal-title">{{ title }} Socio</h4>
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
              @click="showModal = !showModal"
            />
            <input
              type="submit"
              class="btn btn-success"
              data-dismiss="modal"
              data-action="add"
              value="Aceptar"
              @click="RecordSave(action)"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormModal",
  data() {
    return {};
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    action() {
      return this.$store.state.action;
    },
    showModal() {
      return this.$store.state.showModal;
    },
    record() {
      return this.$store.state.record;
    },
  },
  methods: {
    RecordSave(action) {
      //Falta agregar los Fetch a  Firebase, con la estructura de Record que esta
      // en el State del Store
      switch (action) {
        case "add":
          //Agrega un Item
          break;
        case "del":
          //Borra un Item
          break;
        case "edit":
          //Edita un Item
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>