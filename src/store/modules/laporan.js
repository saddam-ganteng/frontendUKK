// import queryString from "query-string";
import {
  GET_PROVINSI,
  GET_KOTA,
  GET_KECAMATAN,
  GET_KATEGORI,
  GET_LAPORAN,
  ADD_LAPORAN,
  DELETE_LAPORAN
} from "../../api/laporan";

const state = {
  resp: null,
  provinsi: [],
  kota: [],
  kecamatan: [],
  kategori: [],
  laporan: []
};

const mutations = {
  SET_RESP: (states, payload) => {
    states.resp = payload;
  },
  SET_PROVINSI: (states, payload) => {
    states.provinsi = payload;
  },
  SET_KOTA: (states, payload) => {
    states.kota = payload;
  },
  SET_KECAMATAN: (states, payload) => {
    states.kecamatan = payload;
  },
  SET_KATEGORI: (states, payload) => {
    states.kategori = payload.data;
  },
  SET_LAPORAN: (states, payload) => {
    states.laporan = payload.data;
  }
};

const actions = {
  GET_PROVINSI: async ({ commit }) => {
    return await GET_PROVINSI()
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_PROVINSI", resp.data.provinsi);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_PROVINSI", []);
        }
      });
  },
  GET_KOTA: async ({ commit }, args) => {
    return await GET_KOTA(args)
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_KOTA", resp.data.kota_kabupaten);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_KOTA", []);
        }
      });
  },
  GET_KECAMATAN: async ({ commit }, args) => {
    return await GET_KECAMATAN(args)
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_KECAMATAN", resp.data.kecamatan);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_KECAMATAN", []);
        }
      });
  },
  GET_KATEGORI: async ({ commit }) => {
    return await GET_KATEGORI()
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_KATEGORI", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_KATEGORI", []);
        }
      });
  },
  GET_LAPORAN: async ({ commit }) => {
    return await GET_LAPORAN()
      .then(resp => {
        if (resp.status === 200) {
          // console.log(resp.data);
          commit("SET_LAPORAN", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp.status === 404) {
          commit("SET_LAPORAN", []);
        }
      });
  },
  // eslint-disable-next-line no-unused-vars
  ADD_LAPORAN: async ({ commit }, args) => {
    return await ADD_LAPORAN(args)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        let resp = err.response;
        console.log(resp);
      });
  },
  // eslint-disable-next-line no-unused-vars
  DELETE_LAPORAN: ({ commit }, args) => {
    return DELETE_LAPORAN(args);
  }
};

const getters = {
  provinsi: states => states.provinsi,
  kota: states => states.kota,
  kecamatan: states => states.kecamatan,
  kategori: states => states.kategori,
  laporan: states => states.laporan
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
