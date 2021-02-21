import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
