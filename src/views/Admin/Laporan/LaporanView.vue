<template>
  <div class="row">
    <div class="col-10 mx-auto">
      <div class="card rounded-xl card-custom gutter-b shadow">
        <div class="card-body p-0">
          <div class="row justify-content-center py-8 px-8 py-md-27 px-md-0">
            <div class="col-md-10">
              <div
                class="d-flex justify-content-between pb-5 flex-column flex-md-row"
              >
                <h1 class="display-4 font-weight-boldest mb-10">
                  {{ laporanID.judul }}
                </h1>
                <div class="d-flex flex-column align-items-md-end px-0">
                  <h2 class="text-dark font-weight-bolder mb-2">
                    {{ laporanID.kategori }}
                  </h2>
                  <h6 class="text-dark mb-4 font-size-13 opacity-90">
                    {{ laporanID.tgl_laporan }}
                  </h6>
                  <span
                    class="d-flex flex-column align-items-md-end opacity-70"
                  >
                    <span class="font-size-14">
                      {{ laporanID.provinsi }}, {{ laporanID.kota }},
                      {{ laporanID.kecamatan }}
                    </span>
                    <span>{{ laporanID.status }}</span>
                  </span>
                </div>
              </div>
              <div class="d-flex justify-content-between pb-5">
                <div class="d-flex flex-column flex-root">
                  <span class="font-size-14">
                    {{ laporanID.isi_laporan }}
                  </span>
                </div>
              </div>
              <div class="border-bottom w-100"></div>
              <div
                class="mt-4"
                v-for="item in tanggapan"
                :key="item.id_tanggapan"
              >
                <div class="card card-custom rounded-xl gutter-b shadow">
                  <div class="card-header">
                    <div class="card-title">
                      <h3 class="card-label font-weight-bolder">
                        {{ item.nama_petugas }}
                      </h3>
                    </div>
                  </div>
                  <div class="card-body font-size-14">
                    {{ item.tanggapan }}
                  </div>
                </div>
              </div>
              <div
                class="mt-4"
                v-if="laporanID.status === 'proses' && auth_level == 2"
              >
                <form @submit.prevent="tanggapi">
                  <div class="card card-custom gutter-b shadow">
                    <div class="card-body">
                      <div class="form-group mb-1">
                        <textarea
                          class="form-control"
                          style="resize: none;"
                          rows="4"
                          v-model="form.tanggapan"
                        ></textarea>
                      </div>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-primary mr-2 float-right">
                        Kirim
                      </button>
                    </div>
                  </div>
                </form>
                <button @click="laporSelesai" class="btn btn-info float-right">
                  Selesai
                </button>
              </div>
              <div v-else>
                <!-- <button
                  class="btn font-weight-bolder text-uppercase font-size-lg btn-success py-3 px-6 float-right"
                >
                  Cetak Laporan
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tanggapan: ""
      }
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    laporanID() {
      return this.$store.getters["laporan/laporanID"]
        ? this.$store.getters["laporan/laporanID"]
        : [];
    },
    auth() {
      return this.$store.getters["auth/auth"]
        ? this.$store.getters["auth/auth"]
        : [];
    },
    tanggapan() {
      return this.$store.getters["laporan/tanggapan"]
        ? this.$store.getters["laporan/tanggapan"]
        : [];
    },
    auth_level() {
      return this.$store.getters["auth/auth_level"]
        ? this.$store.getters["auth/auth_level"]
        : [];
    }
  },
  methods: {
    getData() {
      let id = this.$router.history.current.params.id;
      this.$store.dispatch("laporan/GET_LAPORAN_ID", id).then(() => {
        this.$store.dispatch(
          "laporan/GET_TANGGAPAN_ID",
          this.laporanID.id_laporan
        );
      });
    },
    getTanggapan() {
      this.$store.dispatch(
        "laporan/GET_TANGGAPAN_ID",
        this.laporanID.id_laporan
      );
    },
    tanggapi() {
      const args = {
        id_laporan: this.laporanID.id_laporan,
        tanggapan: this.form.tanggapan,
        id_petugas: this.auth.id_petugas,
        nama_petugas: this.auth.nama_petugas
      };
      this.$store.dispatch("laporan/ADD_TANGGAPAN", args).then(() => {
        this.$store.dispatch(
          "laporan/GET_TANGGAPAN_ID",
          this.laporanID.id_laporan
        );
        this.form.tanggapan = "";
      });
    },
    laporSelesai() {
      let id = this.laporanID.id_laporan;
      this.$store.dispatch("laporan/DONE_LAPORAN", id).then(() =>
        this.$swal
          .fire("Selesai!", "Laporan Telah Terselesaikan", "success")
          .then(() => {
            this.$router.push({ name: "Home" });
          })
      );
    }
  }
};
</script>
 