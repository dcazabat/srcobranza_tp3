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

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.filter('upper', function (value) {
  if (!value) return ''
  return value.toString().toUpperCase()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
