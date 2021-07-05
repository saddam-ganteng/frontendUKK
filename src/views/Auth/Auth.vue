<template>
  <div v-if="isAdmin" class="row no-gutters authadmin">
    <div class="col-12 col-xl-4 bg-dark d-flex align-content-between flex-wrap">
      <div class="mx-auto my-auto title">
        <h2 class="text-light font-weight-bolder">DMARE</h2>
      </div>
      <div class="banner">
        <img src="@/assets/banner.png" alt="" />
      </div>
    </div>
    <div class="col-12 col-xl-8 d-flex flex-column form-login">
      <div class="row my-auto no-gutters">
        <div class="col-12 col-xl-7 mx-auto">
          <div class="card p-5 rounded shadow">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(LoginAdmin)">
                <div class="login-form login-signin py-11">
                  <div class="pb-8">
                    <h2
                      class="font-weight-bolder text-dark font-size-h2 font-size-h1-lg"
                    >
                      Welcome to DMARE
                    </h2>
                    <!-- <span class="text-muted font-weight-bold font-size-h6">
                      New Here?
                      <router-link to="/Register">
                        Create an Account
                      </router-link>
                    </span> -->
                  </div>
                  <div class="form-group">
                    <label class="font-size-h6 font-weight-bolder text-dark"
                      >Username</label
                    >
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <input
                        class="form-control form-control-solid h-auto py-3 px-4 rounded-xl"
                        type="text"
                        name="username"
                        autocomplete="off"
                        v-model="formLogin.username"
                      />
                      <span class="text-danger pl-1" id="error">
                        {{ errors[0] }}
                      </span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label class="font-size-h6 font-weight-bolder text-dark"
                      >Password</label
                    >
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <input
                        class="form-control form-control-solid h-auto py-3 px-4 rounded-xl"
                        type="password"
                        name="Password"
                        autocomplete="off"
                        v-model="formLogin.password"
                      />
                      <span class="text-danger pl-1" id="error">
                        {{ errors[0] }}
                      </span>
                    </ValidationProvider>
                  </div>
                  <div class="pt-2">
                    <button
                      type="submit"
                      class="btn btn-primary font-weight-bolder px-4 py-3"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
      <!-- <div v-else-if="isRegister" class="row my-auto no-gutters">
        <div class="col-12 col-xl-7 mx-auto">
          <div class="card p-5 rounded shadow">
            <form @submit.prevent="LoginAdmin">
              <div class="login-form login-signin py-11">
                <div class="pb-8">
                  <h2
                    class="font-weight-bolder text-dark font-size-h2 font-size-h1-lg"
                  >
                    Sign Up
                  </h2>
                  <span class="text-muted font-weight-bold font-size-h6">
                    Enter your details to create your account
                  </span>
                </div>
                <div class="form-group">
                  <label class="font-size-h6 font-weight-bolder text-dark"
                    >email</label
                  >
                  <input
                    class="form-control form-control-solid h-auto py-3 px-4 rounded-xl"
                    type="text"
                    name="email"
                    autocomplete="off"
                    v-model="formAdmin.email"
                  />
                </div>
                <div class="form-group">
                  <label class="font-size-h6 font-weight-bolder text-dark"
                    >Password</label
                  >
                  <input
                    class="form-control form-control-solid h-auto py-3 px-4 rounded-xl"
                    type="password"
                    name="password"
                    autocomplete="off"
                    v-model="formAdmin.password"
                  />
                </div>
                <div class="pt-2">
                  <button
                    type="submit"
                    class="btn btn-primary font-weight-bolder px-4 py-3"
                  >
                    Sign In asd
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> -->
      <div class="row pt-auto no-gutters">
        <div class="col-5 col-xl-3 offset-1 offset-xl-3 pl-4 pb-3">
          <span class="text-muted font-weight-bolder">
            2021© DMARE
          </span>
        </div>
        <div class="col-1 pl-2 pb-3">
          <span class="text-muted font-weight-bolder">
            <a href="#">Terms</a>
          </span>
        </div>
        <div class="col-4 col-xl-3 pl-5 pb-3">
          <span class="text-muted font-weight-bolder">
            <a href="#">Contact Us</a>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="auth">
    <nav class="navbar navbar-light bg-light justify-content-between p-3">
      <a class="navbar-brand font-weight-bolder">NGADS</a>
      <button
        class="btn btn-outline-primary btn-lg my-2 my-sm-0"
        @click="modalLogin()"
      >
        Login
      </button>
    </nav>
    <l-map
      style="height: 640px"
      :zoom="zoom"
      :center="center"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng.sync="lnglatJakarta">
        <l-popup>Laporan Di Jakarta Sebanyak {{ jakarta }}</l-popup>
      </l-marker>
      <l-marker :lat-lng.sync="lnglatAceh">
        <l-popup>Laporan Di Aceh Sebanyak {{ aceh }}</l-popup>
      </l-marker>
      <l-marker :lat-lng.sync="lnglatBali">
        <l-popup>Laporan Di Bali Sebanyak {{ bali }}</l-popup>
      </l-marker>
      <l-marker :lat-lng.sync="lnglatSulawesi">
        <l-popup>Laporan Di Sulawesi Sebanyak {{ sulawesi }}</l-popup>
      </l-marker>
      <l-marker :lat-lng.sync="lnglatYogyakarta">
        <l-popup>Laporan Di Yogyakarta Sebanyak {{ yogyakarta }}</l-popup>
      </l-marker>
      <l-marker :lat-lng.sync="lnglatPapua" :draggable="true">
        <l-popup>Laporan Di Papua Sebanyak {{ papua }}</l-popup>
      </l-marker>
    </l-map>
    <div class="p-3">
      ©DMARE
    </div>
    <Modal />
  </div>
</template>

<script>
import Modal from "../../components/Modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      formLogin: {
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
        .dispatch("auth/LOGIN_PETUGAS", this.formLogin)
        .then(() => {
          if (this.resp.code === 404) {
            console.log("error asd");
            this.$swal.fire({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              icon: "error",
              title: "Signed in Failed"
            });
          } else {
            this.$router.push("/Home");
            this.$swal.fire({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              icon: "success",
              title: "Signed in successfully"
            });
          }
        })
        .catch(error => {
          console.log(error, "asd");
        });
    },
    zoomUpdate(zoom) {
      this.zoom = zoom;
    },
    centerUpdate(center) {
      this.center = center;
    },
    modalLogin() {
      this.$bvModal.show("modal-login");
    }
  },
  computed: {
    isAdmin() {
      return this.$route.name == "AuthLoginAdmin";
    },
    isLogin() {
      return this.$route.name == "AuthLogin";
    },
    isRegister() {
      return this.$route.name == "AuthRegister";
    },
    resp() {
      return this.$store.getters["auth/resp"]
        ? this.$store.getters["auth/resp"]
        : 0;
    },
    bali() {
      return this.$store.getters["laporan/bali"]
        ? this.$store.getters["laporan/bali"]
        : 0;
    },
    jakarta() {
      return this.$store.getters["laporan/jakarta"]
        ? this.$store.getters["laporan/jakarta"]
        : 0;
    },
    aceh() {
      return this.$store.getters["laporan/aceh"]
        ? this.$store.getters["laporan/aceh"]
        : 0;
    },
    papua() {
      return this.$store.getters["laporan/papua"]
        ? this.$store.getters["laporan/papua"]
        : 0;
    },
    sulawesi() {
      return this.$store.getters["laporan/sulawesi"]
        ? this.$store.getters["laporan/sulawesi"]
        : 0;
    },
    yogyakarta() {
      return this.$store.getters["laporan/yogyakarta"]
        ? this.$store.getters["laporan/yogyakarta"]
        : 0;
    }
  },
  mounted() {
    this.$store.dispatch("laporan/GET_LAPORAN_JAKARTA");
  }
};
</script>

<style lang="scss">
.authadmin {
  height: 100vh !important;
}

.form-login {
  height: 100%;
}

.title {
  padding-top: 5rem;
}

.banner img {
  height: auto;
  width: 100%;
}
</style>
