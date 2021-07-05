<template>
  <div class="d-flex flex-column-fluid">
    <div class="container-fluid">
      <div v-if="auth_level == 2" class="row">
        <div class="col-4">
          <div class="card rounded-xl shadow card-custom gutter-b">
            <div class="card-body text-center pt-4">
              <div class="my-4">
                <div class="symbol symbol-circle symbol-lg-120">
                  <img src="https://via.placeholder.com/150" alt="" />
                </div>
              </div>
              <div class="mt-7">
                <span
                  class="text-dark font-weight-bold text-hover-primary font-size-h4"
                >
                  Kategori
                </span>
              </div>
              <div class="mt-9">
                <router-link to="/Laporan/Kategori">
                  <span
                    class="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase"
                  >
                    Kategori
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card rounded-xl shadow card-custom gutter-b">
            <div class="card-body text-center pt-4">
              <div class="my-4">
                <div class="symbol symbol-circle symbol-lg-120">
                  <img src="https://via.placeholder.com/150" alt="" />
                </div>
              </div>
              <div class="mt-7">
                <span
                  class="text-dark font-weight-bold text-hover-primary font-size-h4"
                >
                  Laporan
                </span>
              </div>
              <div class="mt-9">
                <router-link to="/Laporan/List">
                  <span
                    class="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase"
                  >
                    Laporan
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <div class="col-4">
          <div class="card rounded-xl shadow card-custom gutter-b">
            <div class="card-body text-center pt-4">
              <div class="my-4">
                <div class="symbol symbol-circle symbol-lg-120">
                  <img src="https://via.placeholder.com/150" alt="" />
                </div>
              </div>
              <div class="mt-7">
                <span
                  class="text-dark font-weight-bold text-hover-primary font-size-h4"
                >
                  Buat Laporan
                </span>
              </div>
              <div class="mt-9">
                <router-link to="/Laporan/Add">
                  <span
                    class="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase"
                  >
                    Buat
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card rounded-xl shadow card-custom gutter-b">
            <div class="card-body text-center pt-4">
              <div class="my-4">
                <div class="symbol symbol-circle symbol-lg-120">
                  <img src="https://via.placeholder.com/150" alt="" />
                </div>
              </div>
              <div class="mt-7">
                <span
                  class="text-dark font-weight-bold text-hover-primary font-size-h4"
                >
                  LaporanKu
                </span>
              </div>
              <div class="mt-9">
                <router-link to="/Laporan/Ku">
                  <span
                    class="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase"
                  >
                    Lihat
                  </span>
                </router-link>
              </div>
            </div>
          </div>
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

<style></style>
