import Vue from "vue";
import VueRouter from "vue-router";

import state from '../store';

import Home from "../views/Home.vue";
import About from '../views/About.vue';
import Socios from "../views/Socios.vue";
import Cobradores from "../views/Cobradores.vue";
import Login from "../views/Login.vue";
import NotFound from '../views/404.vue';
import UnAuthorized from '../views/401.vue'
import Underconstruction from '../views/Underconstruction.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { Auth: false, title: "Sr. Cobranza - Home" }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { Auth: false, title: "Sr. Cobranza - Acerca de ..." }
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
    meta: { Auth: false, title: "Sr. Cobranza - Login" }

  },
  {
    path: "/cobradores",
    name: "Cobradores",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cobradores,
    meta: { Auth: true, title: "Sr. Cobranza - Cobradores" }

  },
  {
    path: "/socios",
    name: "Socios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Socios,
    meta: { Auth: true, title: "Sr. Cobranza - Socios" }

  },
  {
    path: "*",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NotFound,
    meta: { Auth: false, title: "Sr. Cobranza - Pagina No Existe" }

  },
  {
    path: "/unauthorired",
    name: "UnAuthorized",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UnAuthorized,
    meta: { Auth: false, title: "Sr. Cobranza - Error en Acceso" }

  }
  ,
  {
    path: "/underconstruction",
    name: "underconstruction",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Underconstruction,
    meta: { Auth: false, title: "Sr. Cobranza - Underconstruction" }
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


  if (to.meta.Auth) {
    if (state.isLogged && to.path != '/login') {
      next();
    } else {
      next({ path: "/unauthorired" })
    }
  } else {
    if ((from.path == '/socios' || from.path == '/cobradores') && to.path == '/login') {
      next({ path: "/unauthorired" })
    } else {
      next();
    }
  }
})

router.afterEach(() => {
  // if (localStorage.getItem('srCobranza')) {
  //   state.isLogged = true;
  // }
  console.log(localStorage.getItem('srCobranza'), state.isLogged);
})

export default router;
