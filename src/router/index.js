import Vue from "vue";
import VueRouter from "vue-router";

import state from '../store';

import Home from "../views/Home.vue";
import Socios from "../views/Socios.vue";
import Cobradores from "../views/Cobradores.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {Auth:false, title:"Sr. Cobranza - Home"}
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
    meta: {Auth:false, title:"Sr. Cobranza - Login"}

  },
  {
    path: "/cobradores",
    name: "Cobradores",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cobradores,
    meta: {Auth:false, title:"Sr. Cobranza - Cobradores"}

  },
  {
    path: "/socios",
    name: "Socios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Socios,
    meta: {Auth:false, title:"Sr. Cobranza - Socios"}

  }
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {

  document.title = to.meta.title;

  // to and from are both route objects. must call `next`.
  if(state.isLogged && (to.path === '/login' || to.path === '/')){
    console.log("Estoy en el route beforeeach")
    next("/socios");
  }else{
    next();
  }
})

export default router;
