// import queryString from "query-string";
import {
  GET_PROVINSI,
  GET_KOTA,
  GET_KECAMATAN,
  GET_KATEGORI,
  GET_LAPORAN,
  ADD_LAPORAN,
  DELETE_LAPORAN,
  GET_LAPORAN_NIK,
  GET_LAPORAN_ID,
  ADD_TANGGAPAN,
  GET_TANGGAPAN_ID
} from "../../api/laporan";

const state = {
  resp: null,
  provinsi: [],
  kota: [],
  kecamatan: [],
  kategori: [],
  laporan: [],
  laporanID: [],
  laporanNIK: [],
  tanggapan: []
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
  },
  SET_LAPORAN_ID: (states, payload) => {
    states.laporanID = payload.data;
  },
  SET_LAPORAN_NIK: (states, payload) => {
    states.laporanNIK = payload.data;
  },
  SET_TANGGAPAN_ID: (states, payload) => {
    if (payload) {
      // console.log(payload);
      // console.log("asdsad");
      states.tanggapan = payload.data;
    } else {
      console.log("payload is undefined");
    }
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
  GET_LAPORAN_NIK: async ({ commit }, args) => {
    return await GET_LAPORAN_NIK(args)
      .then(resp => {
        if (resp.status === 200) {
          // console.log(resp.data);
          commit("SET_LAPORAN_NIK", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp.status === 404) {
          commit("SET_LAPORAN_NIK", []);
        }
      });
  },
  GET_LAPORAN_ID: async ({ commit }, args) => {
    return await GET_LAPORAN_ID(args)
      .then(resp => {
        if (resp.status === 200) {
          // console.log(resp.data);
          commit("SET_LAPORAN_ID", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp.status === 404) {
          commit("SET_LAPORAN_ID", []);
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
  ADD_TANGGAPAN: async ({ commit }, args) => {
    return await ADD_TANGGAPAN(args)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        let resp = err.response;
        console.log(resp);
      });
  },

  GET_TANGGAPAN_ID: async ({ commit }, id) => {
    // console.log(id, "ini store");
    return await GET_TANGGAPAN_ID(id)
      .then(resp => {
        if (resp.status === 200) {
          // console.log(resp.data);
          commit("SET_TANGGAPAN_ID", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp.status === 404) {
          commit("SET_TANGGAPAN_ID", []);
        }
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
  laporan: states => states.laporan,
  laporanID: states => states.laporanID,
  laporanNIK: states => states.laporanNIK,
  tanggapan: states => states.tanggapan
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
