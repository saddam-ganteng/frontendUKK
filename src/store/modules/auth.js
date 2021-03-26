import axios from "axios";
import { LOGIN } from "../../api/auth";

const state = {
  resp: null,
  auth: null,
  auth_status: true
};

const mutations = {
  SET_RESP: (states, payload) => {
    states.resp = payload;
  },
  SET_LOGIN: (states, payload) => {
    states.auth = payload.data;
    states.auth_status = true;
    axios.defaults.headers.common["Authorization"] = payload.data.token;
  },
  SET_LOGOUT: states => {
    states.auth_status = false;
    states.auth = null;
    axios.defaults.headers.common["Authorization"] = null;
  }
};

const actions = {
  LOGIN: ({ commit }, args) => {
    return LOGIN(args)
      .then(res => {
        let data = res.data;
        // console.log(data.data.token);
        // localStorage.setItem("token", data.data.token);
        commit("SET_LOGIN", data);
        return true;
      })
      .catch(err => {
        console.log("Error while login", err);
        localStorage.removeItem("token");
        commit("SET_RESP", err.response);
        return true;
      });
  },

  LOGOUT: ({ commit }) => {
    commit("SET_LOGOUT");
    localStorage.removeItem("token");
  }
};

const getters = {
  auth: states => states.auth,
  auth_status: states => states.auth_status
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
