<template>
  <div v-if="cek == null">
    <div class="topbar auth">
      <ul class="topbar__breadcrumb">
        <li class="topbar__breadcrumb__item">
          NGADS
        </li>
      </ul>
      <div class="topbar__profile">
        <span
          class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
          >Hi,</span
        >
        <span
          class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
          >Admin</span
        >
      </div>
    </div>
  </div>
  <div v-else>
    <div class="topbar">
      <ul class="topbar__breadcrumb">
        <li class="topbar__breadcrumb__item">
          <a class="topbar__breadcrumb__link" href="#">{{
            currentRouteName
          }}</a>
        </li>
      </ul>
      <div class="topbar__profile">
        <div
          id="kt_quick_user_toggle"
          class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
        >
          <span
            class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
            >Hi,</span
          >
          <span
            class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
            >Admin</span
          >
          <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
            <span class="symbol-label font-size-h5 font-weight-bold">A</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cek() {
      return this.$store.getters["auth/auth_status"]
        ? this.$store.getters["auth/auth_status"]
        : null;
    },
    currentRouteName() {
      return this.$route.name;
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
