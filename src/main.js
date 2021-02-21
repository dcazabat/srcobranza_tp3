import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Vuelidate from 'vuelidate'
import ToggleButton from 'vue-js-toggle-button'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;
Vue.use(ToggleButton)
Vue.use(Vuelidate);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
