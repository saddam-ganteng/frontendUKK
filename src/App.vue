<template>
  <div v-if="cek == true">
    <Sidebar />
    <div class="content-container">
      <Topbar />
      <div class="page-content">
        <transition name="fade-in-up">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
  <div v-else>
    <Topbar v-if="!isAdmin" />
    <Auth />
  </div>
</template>

<script>
import Auth from "./views/Auth/Auth.vue";
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
    },
    isAdmin() {
      return this.$route.name == "AuthAdmin";
    }
  }
};
</script>

<style lang="scss">
@import "assets/sass/style.vue";
</style>
