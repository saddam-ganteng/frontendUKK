<template>
  <div>
    login
    <form @submit.prevent="Login">
      <input type="text" v-model="form.username" />
      <input type="text" v-model="form.password" />
      <button class="btn btn-primary" type="sumbit">
        Login
      </button>
    </form>
    {{ this.form.username }}
    {{ this.form.password }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    Login() {
      this.$store
        .dispatch("auth/LOGIN", this.form)
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
