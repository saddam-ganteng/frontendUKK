<template>
  <div v-if="isAdmin" class="row no-gutters authadmin">
    <div class="col-4 bg-dark"></div>
    <div class="col-8">
      <div class="row no-gutters h-100">
        <div class="col-5 mx-auto my-auto">
          <div class="card p-5 rounded shadow">
            <form @submit.prevent="LoginAdmin">
              <div class="login-form login-signin py-11">
                <div class="text-center pb-8">
                  <h2
                    class="font-weight-bolder text-dark font-size-h2 font-size-h1-lg"
                  >
                    Sign In
                  </h2>
                </div>
                <div class="form-group">
                  <label class="font-size-h6 font-weight-bolder text-dark"
                    >Username</label
                  >
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="text"
                    name="username"
                    autocomplete="off"
                    v-model="formAdmin.username"
                  />
                </div>
                <div class="form-group">
                  <div class="d-flex justify-content-between mt-n5">
                    <label
                      class="font-size-h6 font-weight-bolder text-dark pt-5"
                      >Password</label
                    >
                  </div>
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="password"
                    name="password"
                    autocomplete="off"
                    v-model="formAdmin.password"
                  />
                </div>
                <div class="text-center pt-2">
                  <button
                    class="btn btn-dark font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="auth">
    <l-map
      style="height: 647px"
      :zoom="zoom"
      :center="center"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng.sync="lnglatJakarta">
        <l-popup>Laporan Di Jakarta Sebanyak</l-popup>
      </l-marker>
      <l-marker :lat-lng.sync="lnglatAceh">
        <l-popup>Laporan Di Aceh Sebanyak</l-popup>
      </l-marker>
      <l-marker :lat-lng.sync="lnglatBali">
        <l-popup>Laporan Di Bali Sebanyak</l-popup>
      </l-marker>
      <l-marker :lat-lng.sync="lnglatSulawesi">
        <l-popup>Laporan Di Sulawesi Sebanyak</l-popup>
      </l-marker>
      <l-marker :lat-lng.sync="lnglatYogyakarta">
        <l-popup>Laporan Di Yogyakarta Sebanyak</l-popup>
      </l-marker>
      <l-marker :lat-lng.sync="lnglatPapua" :draggable="true">
        <l-popup>Laporan Di Papua Sebanyak</l-popup>
      </l-marker>
    </l-map>
    {{ lnglatPapua }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      formAdmin: {
        username: "",
        password: ""
      },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 5,
      center: [-2.425057, 117.492186],
      lnglatJakarta: [-6.206717, 106.83161],
      lnglatAceh: [5.493519, 95.370117],
      lnglatBali: [-8.411515, 115.233399],
      lnglatSulawesi: [-2.249422, 120.251952],
      lnglatYogyakarta: [-7.839438, 110.338989],
      lnglatPapua: [-4.311356, 138.01465]
    };
  },
  methods: {
    LoginAdmin() {
      this.$store
        .dispatch("auth/LOGIN_ADMIN", this.formAdmin)
        .then(() => {
          this.$swal.fire({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "success",
            title: "Signed in successfully"
          });
          this.$router.push("/Admin/Home");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    zoomUpdate(zoom) {
      this.zoom = zoom;
    },
    centerUpdate(center) {
      this.center = center;
    }
  },
  computed: {
    isAdmin() {
      return this.$route.name == "AuthAdmin";
    },
    bali() {
      return this.$store.getters["laporan/bali"]
        ? this.$store.getters["laporan/bali"]
        : [];
    }
  },
  mounted() {
    this.$store.dispatch("laporan/GET_LAPORAN_BALI");
  }
};
</script>

<style lang="scss">
.auth {
  position: relative;
  top: 73px;
}
.authadmin {
  height: 100vh !important;
}
</style>
