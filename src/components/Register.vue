<template>
  <div class="row justify-content-center">
    <div class="col-md-6 mb-4">
      <section>
        <form class="text-center border border-light p-3">
          <!-- User ID -->
          <input
            type="text"
            id="defaultRegisterFormFirstName"
            class="form-control mb-4"
            placeholder="Id de Usuario"
          />

          <div class="form-row mb-4">
            <div class="col">
              <!-- First name -->
              <input
                type="text"
                id="defaultRegisterFormFirstName"
                class="form-control"
                placeholder="Nombre/s"
              />
            </div>
            <div class="col">
              <!-- Last name -->
              <input
                type="text"
                id="defaultRegisterFormLastName"
                class="form-control"
                placeholder="Apellido/s"
              />
            </div>
          </div>
          <!-- E-mail -->
          <input
            type="email"
            id="defaultRegisterFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
          />
          <!-- Password -->
          <input
            type="password"
            id="defaultRegisterFormPassword"
            class="form-control"
            placeholder="Contraseña"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
          />
          <small
            id="defaultRegisterFormPasswordHelpBlock"
            class="form-text text-muted mb-4"
          >
            Ingrese 8 caracteres minimo alfanumerico
          </small>
          <!-- Phone number -->
          <input
            type="text"
            id="defaultRegisterPhonePassword"
            class="form-control mb-4"
            placeholder="Teléfono"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />
          <!-- Sign up button -->
          <button
            class="btn btn-info btn-block waves-effect waves-light"
            type="submit"
          >
            Registrar
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
import router from "../router";

export default {
  data() {
    return {
      firstUp: false,
    };
  },
  computed: {
    ...mapState(["isLogged"]),
  },
  methods: {
    ...mapMutations([""]),
    ...mapGetters(["isValidUser"]),
    SubmitUserLogin() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.firstUp = true;
        return false;
      } else if (!this.isLogged) {
        this.firstUp = false;
        return false;
      }
      router.push({ name: "Socios" });
    },
  },
  validations: {
    userId: {
      required,
    },
    userPwd: {
      required,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>