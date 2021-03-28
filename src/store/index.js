import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import laporan from "./modules/laporan";
import rakyat from "./modules/rakyat";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    laporan,
    rakyat
  },
  plugins: [
    createPersistedState({
      key: "token",
      reducer: state => ({
        auth: state.auth,
        laporan: state.laporan,
        rakyat: state.rakyat
      })
    })
  ]
});
