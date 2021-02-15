<template>
  <div class="row justify-content-center">
    <div class="col-4 mt-3 p-3 w-25 border border-light">
      <form @click.prevent="SubmitUserLogin">
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
      </form>
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
    ...mapState(["userId", "userPwd", "isLogged"]),
  },
  methods: {
    ...mapMutations([""]),
    ...mapGetters(["isValidUser"]),
    SubmitUserLogin() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.firstUp = true;
        return false;
      } else {
        this.$getters.$isValidaUser;
        if (!this.isLogged) {
          this.firstUp = false;
          return false;
        }
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