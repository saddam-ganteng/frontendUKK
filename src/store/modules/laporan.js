// import queryString from "query-string";
import {
  GET_PROVINSI,
  GET_KOTA,
  GET_KECAMATAN,
  GET_KATEGORI,
  ADD_KATEGORI,
  GET_LAPORAN,
  ADD_LAPORAN,
  DELETE_LAPORAN,
  DELETE_KATEGORI,
  GET_LAPORAN_NIK,
  GET_LAPORAN_ID,
  ADD_TANGGAPAN,
  GET_TANGGAPAN_ID,
  DONE_LAPORAN,
  GET_LAPORAN_JAKARTA,
  GET_LAPORAN_BALI,
  GET_LAPORAN_ACEH,
  GET_LAPORAN_YOGYAKARTA,
  GET_LAPORAN_PAPUA,
  GET_LAPORAN_SULAWESI
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
  tanggapan: [],
  jakarta: [],
  bali: [],
  sulawesi: [],
  papua: [],
  aceh: [],
  yogyakarta: []
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
  },
  SET_LAPORAN_JAKARTA: (states, payload) => {
    states.jakarta = payload.data;
  },
  SET_LAPORAN_BALI: (states, payload) => {
    states.bali = payload.data;
  },
  SET_LAPORAN_ACEH: (states, payload) => {
    states.aceh = payload.data;
  },
  SET_LAPORAN_YOGYAKARTA: (states, payload) => {
    states.yogyakarta = payload.data;
  },
  SET_LAPORAN_PAPUA: (states, payload) => {
    states.papua = payload.data;
  },
  SET_LAPORAN_SULAWESI: (states, payload) => {
    states.sulawesi = payload.data;
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
        commit("SET_RESP", resp.data);
      })
      .catch(err => {
        let resp = err.response;
        commit("SET_RESP", resp.data);
      });
  },
  // eslint-disable-next-line no-unused-vars
  ADD_KATEGORI: async ({ commit }, args) => {
    return await ADD_KATEGORI(args)
      .then(resp => {
        commit("SET_RESP", resp.data);
      })
      .catch(err => {
        let resp = err.response;
        commit("SET_RESP", resp.data);
      });
  },

  // eslint-disable-next-line no-unused-vars
  DONE_LAPORAN: async ({ commit }, args) => {
    return await DONE_LAPORAN(args)
      .then(resp => {
        commit("SET_RESP", resp.data);
      })
      .catch(err => {
        let resp = err.response;
        commit("SET_RESP", resp.data);
      });
  },

  // eslint-disable-next-line no-unused-vars
  ADD_TANGGAPAN: async ({ commit }, args) => {
    return await ADD_TANGGAPAN(args)
      .then(resp => {
        commit("SET_RESP", resp.data);
      })
      .catch(err => {
        let resp = err.response;
        commit("SET_RESP", resp.data);
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
  },
  // eslint-disable-next-line no-unused-vars
  DELETE_KATEGORI: ({ commit }, args) => {
    return DELETE_KATEGORI(args);
  },

  GET_LAPORAN_JAKARTA: async ({ commit }) => {
    return await GET_LAPORAN_JAKARTA()
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_LAPORAN_JAKARTA", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_LAPORAN_JAKARTA", []);
        }
      });
  },
  GET_LAPORAN_BALI: async ({ commit }) => {
    return await GET_LAPORAN_BALI()
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_LAPORAN_BALI", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_LAPORAN_BALI", []);
        }
      });
  },
  GET_LAPORAN_ACEH: async ({ commit }) => {
    return await GET_LAPORAN_ACEH()
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_LAPORAN_ACEH", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_LAPORAN_ACEH", []);
        }
      });
  },
  GET_LAPORAN_YOGYAKARTA: async ({ commit }) => {
    return await GET_LAPORAN_YOGYAKARTA()
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_LAPORAN_YOGYAKARTA", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_LAPORAN_YOGYAKARTA", []);
        }
      });
  },
  GET_LAPORAN_PAPUA: async ({ commit }) => {
    return await GET_LAPORAN_PAPUA()
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_LAPORAN_PAPUA", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_LAPORAN_PAPUA", []);
        }
      });
  },
  GET_LAPORAN_SULAWESI: async ({ commit }) => {
    return await GET_LAPORAN_SULAWESI()
      .then(resp => {
        if (resp.status === 200) {
          commit("SET_LAPORAN_SULAWESI", resp.data);
        }
      })
      .catch(err => {
        let resp = err.response;
        if (resp === 404) {
          commit("SET_LAPORAN_SULAWESI", []);
        }
      });
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
  tanggapan: states => states.tanggapan,
  jakarta: states => states.jakarta,
  bali: states => states.bali,
  sulawesi: states => states.sulawesi,
  papua: states => states.papua,
  aceh: states => states.aceh,
  yogyakarta: states => states.yogyakarta
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
