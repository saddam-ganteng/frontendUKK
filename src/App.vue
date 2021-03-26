<template>
  <div v-if="cek === true">
    <Sidebar />
    <div class="content-container">
      <Topbar />
      <div class="page-content">
        <div class="container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Topbar />
    <Auth />
  </div>
</template>

<script>
import Auth from "../src/views/Auth.vue";
import Sidebar from "../src/components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";
export default {
  components: {
    Auth,
    Sidebar,
    Topbar
  },
  computed: {
    cek() {
      return this.$store.getters["auth/auth_status"]
        ? this.$store.getters["auth/auth_status"]
        : [];
    }
  }
};
</script>

<style lang="scss">
@import "assets/sass/style.vue";
</style>
