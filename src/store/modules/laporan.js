// import queryString from "query-string";
import { GET_PROVINSI } from "../../api/laporan";

const state = {
  resp: null,
  provinsi: []
};

const mutations = {
  SET_RESP: (states, payload) => {
    states.resp = payload;
  },
  SET_PROVINSI: (states, payload) => {
    states.provinsi = payload.data;
  }
};

const actions = {
  GET_PROVINSI: async ({ commit }) => {
    return await GET_PROVINSI()
      .then(resp => {
        if (resp.data.code === 200) {
          commit("SET_PROVINSI", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_PROVINSI", []);
        }
      });
  }
};

const getters = {
  provinsi: states => states.provinsi
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
