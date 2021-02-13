<template>
  <div>
    <div v-if="!isLogged" class="container-fluid w-100 container-style">
      <div class="row align-items-center headline">
        <div class="col col-md-2 w-25">
          <img
            class="img-fluid"
            src="../assets/images/logo.png"
            alt="Logo Sr Cobranza"
          />
        </div>
        <div class="col col-md-8 w-75">
          <p class="text-center title">Sr Cobranza</p>
        </div>
        <div class="col col-md-2 w-25">
          <button type="button" class="btn btn-info" to="/login">
            <img
              src="../assets/images/login.svg"
              alt=""
              width="32"
              height="32"
              title="Ingresar"
              to="/login"
            />
          </button>
        </div>
      </div>
    </div>
    <div v-else class="container-fluid w-100 container-style">
      <div class="row align-items-center headline">
        <div class="col col-md-12">
          <nav class="navbar navbar-expand-md navbar-dark">
            <a class="navbar-brand" href="#">
              <img
                class="logo"
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
              <form class="my-2 my-lg-0" action="../html/index.html">
                <button class="btn btn-danger my-2 my-sm-0" type="submit">
                  <img
                    src="../assets/images/logout.svg"
                    alt="SALIR"
                    title="SALIR"
                  />
                </button>
              </form>
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
  store,
  computed: {
    ...mapState(["isLogged"]),
  },
  methods: {},
};
</script>

<style>
</style>