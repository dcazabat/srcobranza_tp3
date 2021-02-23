<template>
  <div id="B404" class="error-container mb-6">
    <h3>Opps !!!, a donde vamos !!!</h3>
    <hr />
    <h1>401</h1>
    <hr />
    <router-link to="/login" v-if="!this.$store.state.isLogged">
      <button class="btn btn-success">Dirijase a Login</button>
    </router-link>
    <h3>Asi no llegamos a ningun lado, JAJAJAJA</h3>
  </div>
</template>

<script>
export default {};
</script>

<style >
.B404 {
  background-color: #2d72d9;
  color: #fff;
  -moz-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
}

.error-container {
  text-align: center;
}

.error-container h1 {
  margin: 0;
  font-size: 160px;
  font-weight: 300;
}
</style>