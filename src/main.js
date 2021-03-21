import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGoodTablePlugin from "vue-good-table";
import vSelect from "vue-select";
import BootstrapVue from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-good-table/dist/vue-good-table.css";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);

Vue.use(BootstrapVue);
Vue.use(VueGoodTablePlugin);

Vue.config.productionTip = false;

// Global dependencies
window.axios = require("axios");
window.queryString = require("query-string");

// Setup API Endpoint
window.axios.defaults.baseURL = "http://localhost:8000";
// Setup axios post content type
window.axios.defaults.headers.post["Content-Type"] =
  "multipart/form-data; boundary=<calculated when request is sent>";

const token = store.getters["auth/auth"];
const auth_status = store.getters["auth/auth_status"];
if (token && auth_status) {
  window.axios.defaults.headers.common.Authorization = token.token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
