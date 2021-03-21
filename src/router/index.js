import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Lapor from "../views/Lapor.vue";
import Auth from "../views/Auth.vue";

import store from "../store/index";

Vue.use(VueRouter);

const isAuthenticated = (to, from, next) => {
  if (store.getters["auth/auth_status"]) {
    return next();
  }
  return next("/Login");
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Lapor",
    name: "Lapor",
    component: Lapor,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Login",
    name: "Auth",
    component: Auth
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
