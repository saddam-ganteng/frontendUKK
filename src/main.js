import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGoodTablePlugin from "vue-good-table";
import vSelect from "vue-select";
import BootstrapVue from "bootstrap-vue";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { Icon } from "leaflet";
import VueSweetalert2 from "vue-sweetalert2";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
// Import Bootstrap an BootstrapVue CSS files (order is important)

// If you don't need the styles, do not connect

import "sweetalert2/dist/sweetalert2.min.css";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-good-table/dist/vue-good-table.css";
import "vue-select/dist/vue-select.css";

Vue.use(VueSweetalert2);
Vue.component("v-select", vSelect);
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-popup", LPopup);
Vue.component("l-marker", LMarker);

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
