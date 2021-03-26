<template>
  <div class="auth">
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
    zoomUpdate(zoom) {
      this.zoom = zoom;
    },
    centerUpdate(center) {
      this.center = center;
    }
  }
};
</script>

<style lang="scss">
.auth {
  position: relative;
  top: 100px;
}
</style>
