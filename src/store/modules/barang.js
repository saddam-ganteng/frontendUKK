// import queryString from "query-string";
import { GET_BARANG } from "../../api/barang";

const state = {
  resp: null,
  barang: []
};

const mutations = {
  SET_RESP: (states, payload) => {
    states.resp = payload;
  },
  SET_BARANG: (states, payload) => {
    states.barang = payload.data;
  }
};

const actions = {
  GET_BARANG: async ({ commit }) => {
    return await GET_BARANG()
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_BARANG", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_BARANG", []);
        }
      });
  }
};

const getters = {
  barang: states => states.barang
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
