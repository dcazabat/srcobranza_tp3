<template>
  <div class="row justify-content-center">
    <div class="col-md-6 mb-4 mt-3 w-25">
      <form class="text-center border border-warning bg-light rounded-lg p-3">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="InputUserId"
            aria-describedby="userHelp"
            placeholder="Id de Usuario"
            name="userId"
            v-model.trim="userId"
            v-focus
            @input="$v.userId.$touch()"
          />
          <small id="userHelp" class="form-text text-muted"
            >Ingrese el Usuario</small
          >
          <div v-if="firstUp" class="text-left mb-0">
            <small v-if="!$v.userId.required" class="text-danger"
              >Id de Usuario es Requerido</small
            >
          </div>
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
          <div v-if="firstUp" class="text-left mb-0">
            <small v-if="!$v.userPwd.required" class="text-danger"
              >Contraseña Requerida</small
            >
            <small v-if="!$v.userPwd.minLength" class="text-danger"
              >Son 8 caracteres minimo alfanumericos</small
            >
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="SubmitUserLogin"
          :disabled="$v.$invalid"
        >
          Login
        </button>
        <div class="col mt4" v-if="errorInForm">
          <small v-if="userNotRegis && firstUp" class="text-danger">
            <hr />
            Usuario NO Registrado
          </small>
          <small v-if="userPwdError && firstUp" class="text-danger">
            <hr />
            Contraseña Incorrecta
          </small>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { baseUrl } from "../assets/js/urls";
import {
  msgConexionFetchError,
  msgParseFetchError,
} from "../assets/js/messages";
import router from "../router";
const md5 = require("md5");

export default {
  name: "Login",
  data() {
    return {
      userId: "",
      userPwd: "",
      errorInForm: false,
      userNotRegis: false,
      userPwdError: false,
      firstUp: false,
      isRegister: false,
    };
  },
  methods: {
    SubmitUserLogin() {
      this.$v.$touch();
      this.firstUp = true;
      if (this.$v.$invalid) {
        return false;
      } else {
        fetch(baseUrl + "/users/" + this.userId + ".json")
          .then((response) => response.json())
          .catch((err) => {
            this.$store.state.isLogged = false;
            window.alert(msgConexionFetchError, err);
            console.log(msgConexionFetchError, err);
          })
          .then((currentUser) => {
            this.isRegister = true;
            if (currentUser.password === md5(this.userPwd)) {
              this.$store.commit("loggin", currentUser);
              this.$store.state.isLogged = true;
              router.replace({
                path: "/socios",
              });
            } else {
              this.pwdIsCorrect(false);
              this.errorInForm = true;
              this.userNotRegis = false;
              this.userPwdError = true;
              this.$store.state.isLogged = false;
            }
          })
          .catch((err) => {
            this.errorInForm = true;
            this.userNotRegis = true;
            this.userPwdError = false;
            this.$store.state.isLogged = false;
            console.log(msgParseFetchError, err);
          });
      }
    },
    isChangeUserId() {
      this.errorInForm = false;
      this.userNotRegis = false;
      this.userPwdError = false;
    },
    pwdIsCorrect(val) {
      if (val) {
        this.errorInForm = true;
        this.userNotRegis = false;
        this.userPwdError = true;
        this.$store.state.isLogged = false;
      }
    },
  },
  validations: {
    userId: {
      required,
    },
    userPwd: {
      required,
      minLength: minLength(8),
    },
  },
};
</script>

<style>
</style>