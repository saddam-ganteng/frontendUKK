<template>
  <div class="row no-gutters authadmin">
    <div class="col-12 col-xl-4 bg-dark d-flex align-content-between flex-wrap">
      <div class="mx-auto my-auto title">
        <h2 class="text-light font-weight-bolder">DMARE</h2>
      </div>
      <div class="banner">
        <img src="@/assets/banner.png" alt="" />
      </div>
    </div>
    <div class="col-12 col-xl-8 d-flex flex-column form-login">
      <div v-if="isLogin" class="row my-auto no-gutters">
        <div class="col-12 col-xl-7 mx-auto">
          <div class="card p-5 rounded shadow">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(LoginAdmin)">
                <div class="login-form login-signin py-11">
                  <div class="pb-8">
                    <h2
                      class="font-weight-bolder text-dark font-size-h2 font-size-h1-lg"
                    >
                      Welcome to DMARE
                    </h2>
                    <span class="text-muted font-weight-bold font-size-h6">
                      New Here?
                      <router-link to="/Register">
                        Create an Account
                      </router-link>
                    </span>
                  </div>
                  <div class="form-group">
                    <label class="font-size-h6 font-weight-bolder text-dark"
                      >email</label
                    >
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <input
                        class="form-control form-control-solid h-auto py-3 px-4 rounded-xl"
                        type="text"
                        name="email"
                        autocomplete="off"
                        v-model="formLogin.username"
                      />
                      <span class="text-danger pl-1" id="error">
                        {{ errors[0] }}
                      </span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label class="font-size-h6 font-weight-bolder text-dark"
                      >Password</label
                    >
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <input
                        class="form-control form-control-solid h-auto py-3 px-4 rounded-xl"
                        type="password"
                        name="Password"
                        autocomplete="off"
                        v-model="formLogin.password"
                      />
                      <span class="text-danger pl-1" id="error">
                        {{ errors[0] }}
                      </span>
                    </ValidationProvider>
                  </div>
                  <div class="pt-2">
                    <button
                      type="submit"
                      class="btn btn-primary font-weight-bolder px-4 py-3"
                    >
                      Sign In zxc asd
                    </button>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
      <div v-else-if="isRegister" class="row my-auto no-gutters">
        <div class="col-12 col-xl-7 mx-auto">
          <div class="card p-5 rounded shadow">
            <form @submit.prevent="LoginAdmin">
              <div class="login-form login-signin py-11">
                <div class="pb-8">
                  <h2
                    class="font-weight-bolder text-dark font-size-h2 font-size-h1-lg"
                  >
                    Sign Up
                  </h2>
                  <span class="text-muted font-weight-bold font-size-h6">
                    Enter your details to create your account
                  </span>
                </div>
                <div class="form-group">
                  <label class="font-size-h6 font-weight-bolder text-dark"
                    >email</label
                  >
                  <input
                    class="form-control form-control-solid h-auto py-3 px-4 rounded-xl"
                    type="text"
                    name="email"
                    autocomplete="off"
                    v-model="formAdmin.email"
                  />
                </div>
                <div class="form-group">
                  <label class="font-size-h6 font-weight-bolder text-dark"
                    >Password</label
                  >
                  <input
                    class="form-control form-control-solid h-auto py-3 px-4 rounded-xl"
                    type="password"
                    name="password"
                    autocomplete="off"
                    v-model="formAdmin.password"
                  />
                </div>
                <div class="pt-2">
                  <button
                    type="submit"
                    class="btn btn-primary font-weight-bolder px-4 py-3"
                  >
                    Sign In asd
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row pt-auto no-gutters">
        <div class="col-5 col-xl-3 offset-1 offset-xl-3 pl-4 pb-3">
          <span class="text-muted font-weight-bolder">
            2021© DMARE
          </span>
        </div>
        <div class="col-1 pl-2 pb-3">
          <span class="text-muted font-weight-bolder">
            <a href="#">Terms</a>
          </span>
        </div>
        <div class="col-4 col-xl-3 pl-5 pb-3">
          <span class="text-muted font-weight-bolder">
            <a href="#">Contact Us</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLogin: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    LoginAdmin() {
      this.$store
        .dispatch("auth/LOGIN_ADMIN", this.formLogin)
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
          this.$router.push("/Home");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {
    isLogin() {
      return this.$route.name == "AuthLogin";
    },
    isRegister() {
      return this.$route.name == "AuthRegister";
    },
    bali() {
      return this.$store.getters["laporan/bali"]
        ? this.$store.getters["laporan/bali"]
        : 0;
    }
  },
  mounted() {
    // this.$store.dispatch("laporan/GET_LAPORAN_BALI");
  }
};
</script>

<style lang="scss">
.authadmin {
  height: 100vh !important;
}

.form-login {
  height: 100%;
}

.title {
  padding-top: 5rem;
}

.banner img {
  height: auto;
  width: 100%;
}
</style>
