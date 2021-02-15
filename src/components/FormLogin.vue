<template>
  <div v-show="!isLogged">
    <div class="row justify-content-center">
      <div class="col-5">
        <ul class="nav nav-tabs justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#login" data-toggle="tab">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#register" data-toggle="tab">Register</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-content">
      <div id="login" class="container tab-pane active">
        <Login />
      </div>
      <div id="register" class="container tab-pane mt-3 fade">
        <Register />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login";
import Register from "../components/Register";

export default {
  components: {
    Login,
    Register,
  },
};
</script>

<style>
.nav-tabs {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>