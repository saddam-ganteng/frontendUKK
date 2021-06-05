<template>
  <div class="row no-gutters authadmin">
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
            <form @submit.prevent="LoginAdmin">
              <div class="login-form login-signin py-11">
                <div class="pb-8">
                  <h2
                    class="font-weight-bolder text-dark font-size-h2 font-size-h1-lg"
                  >
                    Welcome to DMARE
                  </h2>
                  <span class="text-muted font-weight-bold font-size-h6">
                    New Here? <a href="#">Create an Account</a>
                  </span>
                </div>
                <div class="form-group">
                  <label class="font-size-h6 font-weight-bolder text-dark"
                    >Username</label
                  >
                  <input
                    class="form-control form-control-solid h-auto py-3 px-4 rounded-xl"
                    type="text"
                    name="username"
                    autocomplete="off"
                    v-model="formAdmin.username"
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
                  <button class="btn btn-primary font-weight-bolder px-4 py-3">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row pt-auto no-gutters">
        <div class="col-3 offset-2 offset-xl-3 pl-4 pb-3">
          <span class="text-muted font-weight-bolder">
            2021© DMARE
          </span>
        </div>
        <div class="col-2 pl-4 pb-3">
          <span class="text-muted font-weight-bolder">
            Terms
          </span>
        </div>
        <div class="col-2 pl-4 pb-3">
          <span class="text-muted font-weight-bolder">
            Contact Us
          </span>
        </div>
      </div>
    </div>
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
    this.$store.dispatch("laporan/GET_LAPORAN_BALI");
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
