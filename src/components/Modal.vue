<template>
  <div>
    <b-modal id="modal-login" centered hide-footer hide-header button-size="lg">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(Login)">
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
              <ValidationProvider
                name="Username"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                  type="text"
                  autocomplete="off"
                  v-model="form.username"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <div class="d-flex justify-content-between mt-n5">
                <label class="font-size-h6 font-weight-bolder text-dark pt-5"
                  >Password</label
                >
              </div>
              <ValidationProvider
                name="Password"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                  type="password"
                  autocomplete="off"
                  v-model="form.password"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="text-center pt-2">
              <button
                type="submit"
                class="btn btn-dark font-weight-bolder font-size-h6 px-8 py-4 my-3"
              >
                Sign In
              </button>
            </div>
            <div class="text-center text-muted">
              <a href="#" @click="modalRegister()">Belum Punya Akun? daftar</a>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </b-modal>
    <b-modal
      id="modal-register"
      centered
      hide-footer
      hide-header
      button-size="lg"
    >
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(Register)">
          <div class="login-form login-signin py-11">
            <div class="text-center pb-8">
              <h2
                class="font-weight-bolder text-dark font-size-h2 font-size-h1-lg"
              >
                Sign Up
              </h2>
            </div>
            <div class="form-group">
              <label class="font-size-h6 font-weight-bolder text-dark"
                >Nama</label
              >
              <ValidationProvider
                name="Nama"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  class="form-control form-control-solid h-auto py-3 px-3 rounded-lg"
                  type="text"
                  autocomplete="off"
                  v-model="formRegister.nama"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label class="font-size-h6 font-weight-bolder text-dark"
                >Username</label
              >
              <ValidationProvider
                name="Username"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  class="form-control form-control-solid h-auto py-3 px-3 rounded-lg"
                  type="text"
                  autocomplete="off"
                  v-model="formRegister.username"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label class="font-size-h6 font-weight-bolder text-dark"
                >Password</label
              >
              <ValidationProvider
                name="Password"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  class="form-control form-control-solid h-auto py-3 px-3 rounded-lg"
                  type="password"
                  autocomplete="off"
                  v-model="formRegister.password"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label class="font-size-h6 font-weight-bolder text-dark"
                >No Handphone</label
              >
              <ValidationProvider
                name="No Handphone"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  class="form-control form-control-solid h-auto py-3 px-3 rounded-lg"
                  type="text"
                  autocomplete="off"
                  v-model="formRegister.telp"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="text-center pt-2">
              <button
                type="submit"
                class="btn btn-dark font-weight-bolder font-size-h6 px-8 py-3 my-3"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </b-modal>
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
      formRegister: {
        nama: "",
        username: "",
        password: "",
        telp: ""
      }
    };
  },
  computed: {
    resp() {
      return this.$store.getters["auth/resp"]
        ? this.$store.getters["auth/resp"]
        : [];
    }
  },
  methods: {
    Login() {
      this.$store
        .dispatch("auth/LOGIN_RAKYAT", this.form)
        .then(() => {
          this.$router.push("/").then(() =>
            this.$swal.fire({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              icon: "success",
              title: "Signed in successfully"
            })
          );
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    Register() {
      this.$store
        .dispatch("auth/REGISTER_RAKYAT", this.formRegister)
        .then(
          () =>
            this.$swal.fire({
              title: "Berhasil Mendaftar, Silahkan Login"
            }),
          this.$bvModal.hide("modal-register")
        )
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    modalRegister() {
      this.$bvModal.hide("modal-login");
      this.$bvModal.show("modal-register");
    }
  },
  mounted() {
    // console.log("modal kaosdnmklasm");
  }
};
</script>
<style></style>
