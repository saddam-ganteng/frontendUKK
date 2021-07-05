<template>
  <div class="d-flex flex-column-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <div class="card rounded-xl shadow card-custom gutter-b">
            <div class="card-header py-4">
              <div>
                <h3 class="card-label font-weight-bolder text-dark">Profile</h3>
                <span class="text-muted">Informasi Data Diri</span>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <transition name="fade" mode="out-in">
                  <div key="1" v-if="show">
                    <div v-if="auth_level == 2" class="form-group row">
                      <label class="col-sm-2 col-form-label">ID Petugas</label>
                      <div class="col-8 offset-1">
                        <input
                          type="number"
                          class="form-control form-control-lg form-control-solid"
                          placeholder="ID Petugas"
                          readonly
                          v-model="auth.id_petugas"
                        />
                      </div>
                    </div>
                    <div v-else class="form-group row">
                      <label class="col-sm-2 col-form-label">NIK</label>
                      <div class="col-8 offset-1">
                        <input
                          type="number"
                          class="form-control form-control-lg form-control-solid"
                          placeholder="ID Petugas"
                          readonly
                          v-model="auth.nik"
                        />
                      </div>
                    </div>
                    <div v-if="auth_level == 2" class="form-group row">
                      <label class="col-sm-2 col-form-label">Nama</label>
                      <div class="col-8 offset-1">
                        <input
                          type="text"
                          class="form-control form-control-lg form-control-solid"
                          placeholder="Nama"
                          v-model="formDataDiri.nama_petugas"
                        />
                      </div>
                    </div>
                    <div v-else class="form-group row">
                      <label class="col-sm-2 col-form-label">Nama</label>
                      <div class="col-8 offset-1">
                        <input
                          type="text"
                          class="form-control form-control-lg form-control-solid"
                          placeholder="Nama"
                          v-model="formDataDiri.nama_petugas"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Username</label>
                      <div class="col-8 offset-1">
                        <input
                          type="text"
                          class="form-control form-control-lg form-control-solid"
                          placeholder="Username"
                          v-model="auth.username"
                          readonly
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Telp</label>
                      <div class="col-8 offset-1">
                        <input
                          type="number"
                          class="form-control form-control-lg form-control-solid"
                          placeholder="Telp"
                          v-model="formDataDiri.telp"
                        />
                      </div>
                    </div>
                    <div v-if="auth_level == 2" class="form-group row">
                      <label class="col-sm-2 col-form-label">Level</label>
                      <div class="col-8 offset-1">
                        <input
                          type="text"
                          class="form-control form-control-lg form-control-solid"
                          placeholder="Level"
                          v-model="auth.level"
                          readonly
                        />
                      </div>
                    </div>
                  </div>
                  <div key="2" v-else>
                    <!-- <div class="form-group row">
                      <label class="col-sm-2 col-form-label">
                        Password Lama
                      </label>
                      <div class="col-8 offset-1">
                        <input
                          type="password"
                          class="form-control form-control-lg form-control-solid"
                          placeholder="Password Lama"
                        />
                      </div>
                    </div> -->
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">
                        Password Baru
                      </label>
                      <div class="col-8 offset-1">
                        <input
                          type="password"
                          v-model="formDataPassword.password"
                          class="form-control form-control-lg form-control-solid"
                          placeholder="Password Baru"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">
                        Konfirmasi
                      </label>
                      <div class="col-8 offset-1">
                        <input
                          type="password"
                          class="form-control form-control-lg form-control-solid"
                          placeholder="Konfirmasi Password"
                        />
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            <div class="card-footer py-4">
              <transition name="fade" mode="out-in">
                <div key="3" v-if="show">
                  <button
                    type="submit"
                    @click="updateDatadiriPetugas()"
                    class="btn btn-success btn-lg ml-3 float-right"
                  >
                    Update Profile
                  </button>
                  <button
                    v-on:click="show = !show"
                    class="btn btn-primary btn-lg ml-3 float-right"
                  >
                    Update Password
                  </button>
                </div>
                <div key="4" v-if="!show">
                  <button
                    type="submit"
                    @click="updatePassword()"
                    class="btn btn-success btn-lg ml-3 float-right"
                  >
                    Update Password
                  </button>
                  <button
                    v-on:click="show = !show"
                    class="btn btn-danger btn-lg ml-3 float-right"
                  >
                    Batal
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card rounded-xl shadow card-custom gutter-b">
            <div class="card-body text-center pt-4">
              <div class="my-4">
                <div class="symbol symbol-circle symbol-lg-120">
                  <img
                    v-if="auth.image"
                    :src="path + auth.image"
                    :alt="auth.image"
                  />
                  <img
                    v-else
                    src="https://via.placeholder.com/150"
                    alt="avatar.png"
                  />
                </div>
              </div>
              <div class="mt-7">
                <span
                  class="text-dark font-weight-bold text-hover-primary font-size-h4"
                >
                  Photo
                </span>
              </div>
              <div class="mt-9">
                <input
                  type="file"
                  id="file"
                  ref="file"
                  v-on:change="handleFileUpload()"
                />
              </div>
              <div class="mt-9">
                <button
                  @click="updatePhoto()"
                  class="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase"
                >
                  Update
                </button>
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
  data() {
    return {
      path: "http://localhost:8000/assets/images/",
      show: true,
      file: null,
      formDataDiri: {
        nama_petugas: "",
        telp: null
      },
      formDataPassword: {
        password: ""
      }
    };
  },

  computed: {
    auth_token() {
      return this.$store.getters["auth/auth_token"]
        ? this.$store.getters["auth/auth_token"]
        : [];
    },
    auth_level() {
      return this.$store.getters["auth/auth_level"]
        ? this.$store.getters["auth/auth_level"]
        : [];
    },
    auth() {
      return this.$store.getters["auth/auth"]
        ? this.$store.getters["auth/auth"]
        : [];
    }
  },
  methods: {
    updateDatadiriPetugas() {
      const data = {
        token: this.auth_token,
        nama_petugas: this.formDataDiri.nama_petugas,
        telp: this.formDataDiri.telp,
        level: this.auth.level
      };

      this.$swal
        .fire({
          title: "Apakah Profile Ingin Diganti?",
          showCancelButton: true,
          confirmButtonText: `Iya, Ganti!`,
          cancelButtonText: `Tidak`
        })
        .then(result => {
          if (result.isConfirmed) {
            this.$store.dispatch("petugas/PUT_PETUGAS", data).then(() => {
              this.$store.dispatch("auth/PETUGAS", this.auth_token);
            });
            this.$swal.fire(
              "Berhasil!",
              "Profile Berhasil di update",
              "success"
            );
          }
        });
    },
    updatePassword() {
      const data = {
        token: this.auth_token,
        password: this.formDataPassword.password,
        nama_petugas: this.auth.nama_petugas,
        telp: this.auth.telp,
        level: this.auth.level
      };

      this.$swal
        .fire({
          title: "Apakah Password Ingin Diganti?",
          showCancelButton: true,
          confirmButtonText: `Iya, Ganti!`,
          cancelButtonText: `Tidak`
        })
        .then(result => {
          if (result.isConfirmed) {
            this.$store.dispatch("petugas/PUT_PETUGAS", data).then(() => {
              this.$store.dispatch("auth/PETUGAS", this.auth_token);
            });
            this.$swal
              .fire("Berhasil!", "Password Berhasil di update", "success")
              .then(
                () => (
                  (this.show = true), (this.formDataPassword.password = "")
                )
              );
          }
        });
    },
    updatePhoto() {
      let formData = new FormData();
      formData.append("image", this.file);

      let data = {
        token: this.auth_token,
        image: formData
      };

      this.$store.dispatch("petugas/POST_IMAGE", data);
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  },
  async mounted() {
    await this.$store.dispatch("auth/PETUGAS", this.auth_token).then(() => {
      let data = this.$store.getters["auth/auth"];
      this.formDataDiri.nama_petugas = data.nama_petugas;
      this.formDataDiri.telp = data.telp;
    });
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
