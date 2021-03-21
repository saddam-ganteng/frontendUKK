import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import rakyat from "./modules/rakyat";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    rakyat
  },
  plugins: [
    createPersistedState({
      key: "token",
      reducer: state => ({
        auth: state.auth,
        rakyat: state.rakyat
      })
    })
  ]
});
