<template>
  <div>
    <div class="topbar">
      <div class="topbar__profile">
        <div
          id="kt_quick_user_toggle"
          class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
        >
          <span
            class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-3"
            >{{ auth_level == 1 ? auth.nama : auth.nama_petugas }}</span
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
export default {
  components: {},
  computed: {
    auth() {
      return this.$store.getters["auth/auth"]
        ? this.$store.getters["auth/auth"]
        : [];
    },
    auth_level() {
      return this.$store.getters["auth/auth_level"]
        ? this.$store.getters["auth/auth_level"]
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
