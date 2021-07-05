import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Auth from "../views/Auth/Auth.vue";

import Laporan from "../views/Admin/Laporan.vue";
import Kategori from "../views/Admin/Kategori/Kategori.vue";
import LaporanList from "../views/Admin/Laporan/LaporanList.vue";
import LaporanView from "../views/Admin/Laporan/LaporanView.vue";
import LaporanAdd from "../views/Rakyat/LaporanAdd.vue";
import LaporanListID from "../views/Rakyat/LaporanListID.vue";

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
    path: "/Home",
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
    path: "/Laporan",
    name: "Laporan",
    component: Laporan,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Laporan/Kategori",
    name: "Kategori",
    component: Kategori,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Laporan/List",
    name: "LaporanList",
    component: LaporanList,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Laporan/Add",
    name: "LaporanAdd",
    component: LaporanAdd,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Laporan/View/:id",
    name: "LaporanView",
    component: LaporanView,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Laporan/Ku",
    name: "LaporanListID",
    component: LaporanListID,
    beforeEnter: isAuthenticated
  },
  {
    path: "/Login",
    name: "AuthLoginAdmin",
    component: Auth
  },
  {
    path: "/Landing",
    name: "AuthLoginRakyat",
    component: Auth
  },
  {
    path: "/Register",
    name: "AuthRegister",
    component: Auth
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
});

export default router;
