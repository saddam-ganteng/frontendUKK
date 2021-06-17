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
  data() {
    return {
      width: window.innerWidth
    };
  },
  created() {
    window.addEventListener("resize", this.handleWidth);
  },
  beforeDestroy() {
    window.addEventListener("resize", this.handleWidth);
  },
  methods: {
    handleWidth() {
      this.width = window.innerWidth;
    }
  },
  computed: {
    cek() {
      return this.$store.getters["auth/auth_status"]
        ? this.$store.getters["auth/auth_status"]
        : [];
    },
    isLogin() {
      return this.$route.name == "AuthLogin";
    },
    isRegister() {
      return this.$route.name == "AuthRegister";
    }
  }
};
</script>

<style lang="scss">
@import "assets/sass/style.vue";
</style>
