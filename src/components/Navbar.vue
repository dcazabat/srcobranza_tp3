<template>
  <div class="mb-4">
    <div v-if="!isLogged">
      <div class="row align-items-center headline">
        <div class="col col-md-2 w-25">
          <img
            class="img-fluid"
            width="100"
            src="../assets/images/logo.png"
            alt="Logo Sr Cobranza"
          />
        </div>
        <div class="col col-md-6 w-75">
          <p class="text-center title">Sr Cobranza</p>
        </div>
        <div class="col col-md-2">
          <p class="text-center h4">Donde Otros No Pueden</p>
        </div>
        <div class="col col-md-2 w-25">
          <router-link
            type="button"
            class="btn btn-info float-right"
            to="/login"
          >
            <img
              src="../assets/images/login.svg"
              alt=""
              width="32"
              height="32"
              title="Ingresar"
              to="/login"
            />
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row align-items-center headline">
        <div class="col col-md-12">
          <nav class="navbar navbar-expand-md navbar-dark">
            <a class="navbar-brand" href="#">
              <img
                class="logo"
                width="100"
                src="../assets/images/logo.png"
                alt="Logo Sr Cobranza"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#"
                    >Socios <span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../html/cobradores.html"
                    >Cobradores</a
                  >
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Cobranzas
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Ingreso por Cobrador</a>
                    <a class="dropdown-item" href="#">Ingreso por Socio</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Pago en Entidad</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Administracion</a>
                </li>
              </ul>
              <div class="col col-md-2 w-25">
                <router-link
                  type="button"
                  class="btn btn-danger float-right"
                  to="/"
                >
                  <img
                    src="../assets/images/login.svg"
                    alt=""
                    width="32"
                    height="32"
                    title="Ingresar"
                    to="/login"
                  />
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isLogged"]),
  },
  methods: {},
};
</script>

<style>
.title {
  text-transform: uppercase;
  background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>