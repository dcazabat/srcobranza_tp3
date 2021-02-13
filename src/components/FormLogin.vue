<template>
  <div v-if="isRegister">
    <form @click="isValidUser">
      <div class="form-group">
        <input
          v-model="userId"
          type="text"
          class="form-control"
          id="InputUserId"
          aria-describedby="userHelp"
          placeholder="Id de Usuario"
        />
        <small id="userHelp" class="form-text text-muted"
          >Ingrese el Usuario</small
        >
      </div>
      <div class="form-group">
        <input
          v-model="userPwd"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          aria-describedby="pwdHelp"
          placeholder="Contraseña"
        />
        <small id="pwdHelp" class="form-text text-muted"
          >Ingrese la Contreseña</small
        >
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
  <div v-else class="container my-4">
    <h2 class="section-heading mb-4 h2">Register / Sign up form</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <section>
          <form class="text-center border border-light p-5">
            <div class="form-row mb-4">
              <div class="col">
                <!-- First name -->
                <input
                  type="text"
                  id="defaultRegisterFormFirstName"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <!-- Last name -->
                <input
                  type="text"
                  id="defaultRegisterFormLastName"
                  class="form-control"
                  placeholder="Last name"
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
              placeholder="Password"
              aria-describedby="defaultRegisterFormPasswordHelpBlock"
            />
            <small
              id="defaultRegisterFormPasswordHelpBlock"
              class="form-text text-muted mb-4"
            >
              At least 8 characters and 1 digit
            </small>
            <!-- Phone number -->
            <input
              type="text"
              id="defaultRegisterPhonePassword"
              class="form-control"
              placeholder="Phone number"
              aria-describedby="defaultRegisterFormPhoneHelpBlock"
            />
            <small
              id="defaultRegisterFormPhoneHelpBlock"
              class="form-text text-muted mb-4"
            >
              Optional - for two step authentication
            </small>
            <!-- Sign up button -->
            <button
              class="btn btn-info my-4 btn-block waves-effect waves-light"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  state: {
    isRegister: false,
  },
  computed:{
      ...mapState(['userId','userPwd']);
  },
  methods:{
      ...mapMutations(['']),
      ...mapGetters(['']),
      setAction:{
          isRegister = !isRegister,
      }
  }
};
</script>

<style>
</style>