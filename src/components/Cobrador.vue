<template>
  <div class="container-xl">
    <div class="row">
      <div
        class="col-sm-6 mb-4"
        v-for="cobrador in cobradoresArray"
        :key="cobrador.id"
      >
        <Card
          :fullname="cobrador.fullname"
          :gender="cobrador.gender"
          :address="cobrador.address"
          :country="cobrador.country"
          :phone="cobrador.phone"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card,
  },
  computed: {
    cobradoresArray() {
      return this.$store.state.cobradores;
    },
  },
  mounted() {
    this.$store.dispatch("getAllCobradores");
  },
};
</script>

<style>
@import "../assets/css/cardstyle.css";
</style>