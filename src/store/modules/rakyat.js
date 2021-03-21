import queryString from "query-string";
import { GET_RAKYAT } from "../../api/rakyat";

const state = {
  resp: null,
  rakyat: []
};

const mutations = {
  SET_RESP: (states, payload) => {
    states.resp = payload;
  },
  SET_RAKYAT: (states, payload) => {
    states.rakyat = payload.data;
  }
};

const actions = {
  GET_RAKYAT: async ({ commit }, args) => {
    const params = queryString.stringify(args);
    return await GET_RAKYAT(params)
      .then(resp => {
        if (resp.data.code === 200) {
          commit("SET_RAKYAT", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_RAKYAT", []);
        }
      });
  }
};

const getters = {
  rakyat: states => states.rakyat
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
