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
    {{ markerLatLng2 }}
    <l-map
      style="height: 450px"
      :zoom="zoom"
      :center="center"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng">
        <l-popup>{{ form.username }}</l-popup>
      </l-marker>
      <l-marker :lat-lng="markerLatLng1">
        <l-popup>{{ form.username }}</l-popup>
      </l-marker>
      <l-marker :draggable="true" :lat-lng.sync="markerLatLng2">
        <l-popup>{{ form.username }}</l-popup>
      </l-marker>
    </l-map>
    <form @submit.prevent="Login" class="text-center">
      <input type="text" v-model="form.username" />
      <input type="text" v-model="form.password" />
      <button class="btn btn-primary" type="sumbit">
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      formAdmin: {
        username: "",
        password: ""
      },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 5,
      center: [-2.425057, 117.492186],
      markerLatLng: [-6.21919546657281, 106.83146319231591],
      markerLatLng1: [-4.004546023452995, 137.77291718322604],
      markerLatLng2: [-4.004546023452995, 137.77291718322604],
      circle: {
        center: [47.41322, -1.0482],
        radius: 4500,
        color: "red"
      }
    };
  },
  methods: {
    Login() {
      this.$store
        .dispatch("auth/LOGIN", this.form)
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
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
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
    }
  }
};
</script>

<style lang="scss">
.auth {
  position: relative;
  top: 100px;
}
.authadmin {
  height: 100vh !important;
}
</style>
