<template>
  <div class="row justify-content-center">
    <div class="col-md-6 mb-4">
      <section>
        <form
          @click.prevent="SubmitUserRegister"
          class="text-center border border-light p-3"
        >
          <!-- User ID -->
          <input
            type="text"
            id="defaultRegisterFormFirstName"
            class="form-control mb-4"
            placeholder="Id de Usuario"
            name="userId"
            v-model.trim="userId"
            @input="$v.userId.$touch()"
          />
          <small
            v-if="!$v.userId.required && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            Id de Usuario es Requerido
          </small>
          <div class="form-row mb-4">
            <div class="col">
              <!-- First name -->
              <input
                type="text"
                id="defaultRegisterFormFirstName"
                class="form-control"
                placeholder="Nombre/s"
                name="userFirstName"
                v-model.trim="userFirstName"
                @input="$v.userFirstName.$touch()"
              />
              <small
                v-if="!$v.userFirstName.required && firstUp"
                class="alert alert-danger"
                role="alert"
              >
                Nombre/s es Requerido
              </small>
            </div>
            <div class="col">
              <!-- Last name -->
              <input
                type="text"
                id="defaultRegisterFormLastName"
                class="form-control"
                placeholder="Apellido/s"
                name="userLastName"
                v-model.trim="userLastName"
                @input="$v.userLastName.$touch()"
              />
              <small
                v-if="!$v.userLastName.required && firstUp"
                class="alert alert-danger"
                role="alert"
              >
                Apellido/s es Requerido
              </small>
            </div>
          </div>
          <!-- E-mail -->
          <input
            type="email"
            id="defaultRegisterFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
            name="userEmail"
            v-model.trim="userEmail"
            @input="$v.userEmail.$touch()"
          />
          <small
            v-if="!$v.userEmail.required && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            E-mail es Requerido
          </small>
          <small
            v-if="!$v.userEmail.email && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            E-mail es Invalido
          </small>
          <!-- Password -->
          <input
            type="password"
            id="defaultRegisterFormPassword"
            class="form-control"
            placeholder="Contraseña"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
            name="userPassword"
            v-model.trim="userPassword"
            @input="$v.userPassword.$touch()"
          />
          <small
            id="defaultRegisterFormPasswordHelpBlock"
            class="form-text text-muted mb-4"
          >
            Ingrese 8 caracteres minimo alfanumerico
          </small>
          <small
            v-if="!$v.userPassword.required && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            Contraseña Requerida
          </small>
          <!-- Re-Password -->
          <input
            type="password"
            id="defaultRegisterFormRePassword"
            class="form-control"
            placeholder="Contraseña"
            aria-describedby="defaultRegisterReFormPasswordHelpBlock"
            name="userRePassword"
            v-model.trim="userRePassword"
            @input="$v.userRePassword.$touch()"
          />
          <small
            id="defaultRegisterFormRePasswordHelpBlock"
            class="form-text text-muted mb-4"
          >
            Ingrese 8 caracteres minimo alfanumerico
          </small>
          <small
            v-if="!$v.userRePassword.required && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            Contraseña Requerida
          </small>
          <small
            v-if="!$v.userRePassword.sameAs && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            Contraseñas son Diferentes
          </small>
          <!-- Phone number -->
          <input
            type="text"
            id="defaultRegisterPhonePassword"
            class="form-control mb-4"
            placeholder="Teléfono"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
            name="userPhone"
            v-model.trim="userPhone"
            @input="$v.userPhone.$touch()"
          />
          <small
            v-if="!$v.userPhone.badFormat && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            Formato de Telefono Incorrecto. Ej. (1111) 11-1111
          </small>
          <!-- Sign up button -->
          <button
            class="btn btn-info btn-block waves-effect waves-light"
            :disabled="$v.$invalid"
            type="submit"
          >
            Registrar
          </button>
          <!-- Reset up button -->
          <button
            class="btn btn-danger btn-block waves-effect waves-light"
            type="reset"
          >
            Restaurar
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { required, email, sameAs } from "vuelidate/lib/validators";
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
    SubmitUserRegister() {
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
    userFirstName: {
      required,
    },
    userLastName: {
      required,
    },
    userEmail: {
      required,
      email,
    },
    userPassword: {
      required,
    },
    userRePassword: {
      required,
      sameAs: sameAs("userPassword"),
    },
    userPhone: {
      badFormat: function (value) {
        //  Falta chequear con la constante de validacion
        return typeof value === "string";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>