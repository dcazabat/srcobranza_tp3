<template>
    <div class="card align-items-center card-bg-color " style="width: 25rem;">
        <div class="card-header card-header-style">{{ fullname }}</div>
        <p></p>
        <img
            id="card-imagen"
            class="card-img-top"
            :src="(gender == 'm') ? '../assets/images/defaultsociomen.png': '../assets/images/defaultsociowomen.png'"
            alt="Foto del Socio"
        />
        <div class="card-body">
            <h5 class="card-title card-title-style">Datos del Socios</h5>
            <p class="card-text card-text-style">
                <ul>
                    <li>Domicilio : {{ address }}</li>
                    <li>Ciudad : {{ country }}</li>
                    <li>Teléfono : {{ phone }}</li>
                </ul>
            </p>
        <a class="float-left btn btn-primary">Modificar</a>
        <a class="float-right btn btn-danger">Dar de Baja</a>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    fullname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>