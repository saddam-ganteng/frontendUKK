import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth/Auth.vue";

import Barang from "../views/Barang/Barang.vue";
import Kirim from "../views/Barang/Transfer/Kirim.vue";
import Adjusment from "../views/Barang/Adjusment/Adjusment.vue";

import store from "../store/index";

Vue.use(VueRouter);

const isAuthenticated = (to, from, next) => {
  if (store.getters["auth/auth_status"]) {
    return next();
  }
  return next("/Admin/Login");
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
    path: "/Barang",
    name: "Barang",
    component: Barang,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Barang/Kirim",
    name: "Kirim",
    component: Kirim,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Barang/Adjusment",
    name: "Adjusment",
    component: Adjusment,
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
  routes,
  linkExactActiveClass: "active"
});

export default router;
