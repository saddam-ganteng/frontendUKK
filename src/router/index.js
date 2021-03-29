import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Lapor from "../views/Laporan/Lapor.vue";
import LaporView from "../views/Laporan/LaporView.vue";
import LaporKu from "../views/Laporan/LaporKu.vue";
import Auth from "../views/Auth/Auth.vue";
import Petugas from "../views/Petugas.vue";
import Masyarakat from "../views/Masyarakat.vue";

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
    path: "/Admin/Home",
    name: "HomeAdmin",
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
    path: "/Petugas",
    name: "Petugas",
    component: Petugas,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Masyarakat",
    name: "Masyarakat",
    component: Masyarakat,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Lapor",
    name: "Lapor",
    component: Lapor,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Lapor/view/:id",
    name: "LaporView",
    component: LaporView,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Lapor/Ku",
    name: "LaporKu",
    component: LaporKu,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Login",
    name: "Auth",
    component: Auth
    // redirect: () => {
    //   if (store.getters["auth/auth_status"]) {
    //     return "/";
    //   }
    //   return "/login";
    // }
  },
  {
    path: "/Admin/Login",
    name: "AuthAdmin",
    component: Auth
    // redirect: () => {
    //   if (store.getters["auth/auth_status"]) {
    //     return "/";
    //   }
    //   return "/login";
    // }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
