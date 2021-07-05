/* eslint-disable no-unused-vars */
// import queryString from "query-string";
import { PUT_PETUGAS, POST_IMAGE } from "../../api/petugas";

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
  PUT_PETUGAS: ({ commit }, args) => {
    return PUT_PETUGAS(args)
      .then(resp => {
        commit("SET_RESP", resp.data);
      })
      .catch(err => {
        let resp = err.response;
        commit("SET_RESP", resp.data);
      });
  },
  POST_IMAGE: ({ commit }, args) => {
    console.log(args);
    return POST_IMAGE(args)
      .then(resp => {
        // commit("SET_RESP", resp.data);
      })
      .catch(err => {
        let resp = err.response;
        // commit("SET_RESP", resp.data);
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
