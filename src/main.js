import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuelidate from 'vuelidate'
//import Toggle from './assets/js/bootstrap4-toggle.min.js'

Vue.config.productionTip = false;
Vue.use(Vuelidate);
//Vue.use(Toggle);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
