<template>
  <div id="app" class="container-fluid">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
body {
  background-color: black !important;
  margin: 0;
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-wrap: wrap;
}

#app {
  background-color: black;
  height: 600px;
}
</style>
