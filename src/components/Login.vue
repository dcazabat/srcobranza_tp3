<template>
  <div class="row justify-content-center">
    <div class="col-md-6 mb-4 mt-3 w-25">
      <form
        @click.prevent="SubmitUserLogin"
        class="text-center border border-warning bg-light rounded-lg p-3"
      >
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="InputUserId"
            aria-describedby="userHelp"
            placeholder="Id de Usuario"
            name="userId"
            v-model.trim="userId"
            @input="$v.userId.$touch()"
          />
          <small id="userHelp" class="form-text text-muted"
            >Ingrese el Usuario</small
          >
          <small
            v-if="!$v.userId.required && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            Id de Usuario es Requerido
          </small>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            aria-describedby="pwdHelp"
            placeholder="Contraseña"
            name="userPwd"
            v-model.trim="userPwd"
            @input="$v.userPwd.$touch()"
          />
          <small id="pwdHelp" class="form-text text-muted"
            >Ingrese la Contreseña</small
          >
          <small
            v-if="!$v.userPwd.required && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            Contraseña Requerida
          </small>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="$v.$invalid">
          Login
        </button>
        <div v-if="errorInForm">
          <small
            v-if="!!userNotRegis && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            Usuario NO Registrado
          </small>
          <small
            v-if="!!pwdIsCorrect && firstUp"
            class="alert alert-danger"
            role="alert"
          >
            Contraseña Incorrecta
          </small>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { mapState, mapMutations, mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
import router from "../router";

export default {
  data() {
    return {
      errorInForm: false,
      userNotRegis: false,
      userPwdError: false,
      firstUp: false,
    };
  },
  computed: {
    userId() {
      return this.$store.state.userId;
    },
    userPwd() {
      return this.$store.state.userPwd;
    },
    isLogged() {
      return this.$store.state.isLogged;
    },
    isRegister() {
      return this.$store.state.isRegister;
      this.pwdIsCorrect = true;
    },
    pwdIsCorrect() {
      return this.$store.state.pwdIsCorrect;
    },
  },
  methods: {
    SubmitUserLogin() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.firstUp = true;
        return false;
      } else {
        this.$store.dispatch("isValidaUser");
        if (this.$store.state.isRegister) {
          if (!this.$store.state.pwdIsCorrect) {
            this.errorInForm = true;
            this.userNotRegis = false;
            this.pwdIsCorrect = true;
            return false;
          } else {
            router.push({ name: "Socios" });
          }
        } else {
          this.errorInForm = true;
          this.userNotRegis = true;
          this.pwdIsCorrect = false;
          return false;
        }
      }
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

<style>
</style>