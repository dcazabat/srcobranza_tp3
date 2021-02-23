<template>
  <div class="container-xl">
    <div class="card-deck">
      <!-- Carga de los N Socios -->
      <div class="card align-items-center card-bg-color">
        <div class="card-header card-header-style">Apellido y Nombre</div>
        <p></p>
        <img
          id="card-imagen"
          class="card-img-top"
          src="../assets/images/defaultsociomen.png"
          alt="Foto del Socio"
        />
        <div class="card-body">
          <h5 class="card-title card-title-style">Tipo de Socio</h5>
          <p class="card-text card-text-style">
            Datos del Socios (Domicilio, Ciudad, Provincia, Pais, Estado Civil,
            Edad, Fecha de Nacimiento).
          </p>
          <a class="float-left btn btn-primary">Modificar</a>
          <a class="float-right btn btn-danger">Dar de Baja</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/css/cardstyle.css";
</style>