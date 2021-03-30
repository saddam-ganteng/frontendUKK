<template>
  <div v-if="cek == false">
    <div class="topbar auth">
      <ul class="topbar__breadcrumb">
        <li class="topbar__breadcrumb__item">
          Pengaduan Masyarakat
        </li>
      </ul>
      <div class="topbar__profile">
        <button
          @click.prevent="modalLogin()"
          class="btn font-weight-bolder text-uppercase font-size-lg btn-success py-3 px-6"
        >
          Sign IN
        </button>
      </div>
    </div>
    <Modal />
  </div>
  <div v-else>
    <div class="topbar">
      <div class="topbar__profile">
        <div
          id="kt_quick_user_toggle"
          class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
        >
          <span
            class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-3"
            >{{ auth.nama }}</span
          >
          <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
            <span class="symbol-label font-size-h5 font-weight-bold">N</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: {
    Modal
  },
  computed: {
    cek() {
      return this.$store.getters["auth/auth_status"]
        ? this.$store.getters["auth/auth_status"]
        : [];
    },
    auth() {
      return this.$store.getters["auth/auth"]
        ? this.$store.getters["auth/auth"]
        : [];
    }
  },
  methods: {
    modalLogin() {
      this.$bvModal.show("modal-login");
    }
  }
};
</script>

<style lang="scss">
.auth {
  width: 100% !important;
  left: 0 !important;
}
</style>
