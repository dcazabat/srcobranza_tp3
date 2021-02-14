<template>
  <div id="app">
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
  background: black;
}
#app {
  background-color: black;
  height: 600px;
}
</style>
