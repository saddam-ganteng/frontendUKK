import axios from "axios";
import { LOGIN, LOGIN_ADMIN, REGISTER_RAKYAT } from "../../api/auth";

const state = {
  resp: null,
  auth: null,
  auth_status: false,
  auth_level: null
};

const mutations = {
  SET_RESP: (states, payload) => {
    states.resp = payload.data;
  },
  SET_LOGIN_RAKYAT: (states, payload) => {
    states.auth = payload.data;
    states.auth_status = true;
    states.auth_level = 1;
    axios.defaults.headers.common["Authorization"] = payload.data.token;
  },
  SET_LOGIN_ADMIN: (states, payload) => {
    states.auth = payload.data;
    states.auth_status = true;
    states.auth_level = 2;
    axios.defaults.headers.common["Authorization"] = payload.data.token;
  },
  SET_LOGOUT: states => {
    states.auth_status = false;
    states.auth = null;
    states.auth_level = null;
    axios.defaults.headers.common["Authorization"] = null;
  }
};

const actions = {
  LOGIN_RAKYAT: ({ commit }, args) => {
    return LOGIN(args)
      .then(res => {
        let data = res.data;
        commit("SET_LOGIN_RAKYAT", data);
        return true;
      })
      .catch(err => {
        // console.log("Error while login", err);
        localStorage.removeItem("token");
        commit("SET_RESP", err.response);
        return true;
      });
  },
  LOGIN_ADMIN: ({ commit }, args) => {
    return LOGIN_ADMIN(args)
      .then(res => {
        let data = res.data;
        commit("SET_LOGIN_ADMIN", data);
        return true;
      })
      .catch(err => {
        // console.log("Error while login", err);
        localStorage.removeItem("token");
        commit("SET_RESP", err.response);
        return true;
      });
  },

  // eslint-disable-next-line no-unused-vars
  REGISTER_RAKYAT: async ({ commit }, args) => {
    return await REGISTER_RAKYAT(args)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        let resp = err.response;
        console.log(resp);
      });
  },

  LOGOUT: ({ commit }) => {
    commit("SET_LOGOUT");
    localStorage.removeItem("token");
  }
};

const getters = {
  auth: states => states.auth,
  auth_status: states => states.auth_status,
  auth_level: states => states.auth_level,
  resp: states => states.resp
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
