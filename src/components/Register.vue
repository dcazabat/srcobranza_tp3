<template>
  <div class="row justify-content-center">
    <div class="col-md-6 mb-4">
      <section>
        <form class="text-center border border-warning rounded-lg bg-light p-3">
          <!-- User ID -->
          <input
            type="text"
            id="defaultRegisterFormUserID"
            class="form-control"
            :class="{ 'mb-4': !firstUp, 'mb-0': firstUp }"
            placeholder="Id de Usuario"
            name="userId"
            v-model.trim="userId"
            @input="$v.userId.$touch()"
          />
          <div v-if="!$v.userId.required && firstUp" class="text-left mb-0">
            <small class="text-danger"> Id de Usuario es Requerido</small>
          </div>
          <div
            class="form-row mb-4"
            :class="{ 'mb-4': !firstUp, 'mb-0': firstUp }"
          >
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
              <div
                v-if="!$v.userFirstName.required && firstUp"
                class="text-left mb-0"
              >
                <small class="text-danger"> Nombre/s es Requerido</small>
              </div>
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
              <div
                v-if="!$v.userLastName.required && firstUp"
                class="text-left mb-0"
              >
                <small class="text-danger"> Apellido/s es Requerido</small>
              </div>
            </div>
          </div>
          <!-- E-mail -->
          <input
            type="email"
            id="defaultRegisterFormEmail"
            class="form-control"
            :class="{ 'mb-4': !firstUp, 'mb-0': firstUp }"
            placeholder="E-mail"
            name="userEmail"
            v-model.trim="userEmail"
            @input="$v.userEmail.$touch()"
          />
          <div v-if="firstUp" class="text-left mb-0">
            <small v-if="!$v.userEmail.required" class="text-danger">
              E-mail es Requerido</small
            >
            <small v-if="!$v.userEmail.email" class="text-danger">
              E-mail es Invalido</small
            >
          </div>
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
            class="form-text text-muted"
            :class="{ 'mb-4': !firstUp, 'mb-0': firstUp }"
          >
            Ingrese 8 caracteres minimo alfanumerico
          </small>
          <div
            v-if="!$v.userPassword.required && firstUp"
            class="text-left mb-0"
          >
            <small class="text-danger">Contraseña Requerida</small>
          </div>
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
            class="form-text text-muted"
            :class="{ 'mb-4': !firstUp, 'mb-0': firstUp }"
          >
            Ingrese 8 caracteres minimo alfanumerico
          </small>
          <div v-if="firstUp" class="text-left mb-0">
            <small v-if="!$v.userRePassword.required" class="text-danger"
              >Contraseña Requerida</small
            >
            <small v-if="!$v.userRePassword.sameAs" class="text-danger"
              >Contraseñas son Diferentes</small
            >
          </div>
          <!-- Phone number -->
          <input
            type="text"
            id="defaultRegisterPhonePassword"
            class="form-control"
            :class="{ 'mb-4': !firstUp, 'mb-0': firstUp }"
            placeholder="Teléfono"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
            name="userPhone"
            v-model.trim="userPhone"
            @input="$v.userPhone.$touch()"
          />
          <div v-if="!$v.userPhone.badFormat && firstUp" class="text-left mb-0">
            <small class="text-danger"
              >Formato de Telefono Incorrecto. Ej. (1111) 11-1111</small
            >
          </div>
          <!-- Sign up button -->
          <button
            class="btn btn-info btn-block waves-effect waves-light"
            @click.prevent="SubmitUserRegister"
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
            Reset Datos
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { required, email, sameAs } from "vuelidate/lib/validators";
// import router from "../router";

export default {
  data() {
    return {
      userId: "",
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userPassword: "",
      userRePassword: "",
      userPhone: "",
      firstUp: false,
    };
  },
  computed: {
    // isLogged() {
    //   return this.$store.state.isLogged;
    // },
  },
  methods: {
    SubmitUserRegister() {
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   this.firstUp = true;
      //   return false;
      // } else if (!this.isLogged) {
      //   this.firstUp = false;
      //   return false;
      // }
      // router.push({ name: "Socios" });
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