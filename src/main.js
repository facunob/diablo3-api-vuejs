//Librerias npm
import Vue from "vue";
//Archivos locales de la app
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Traer el css
import "./assets/css/main.styl";

// BootstrapVue
import "./plugins/BootstrapVue";

// Vue Font-Awesome
import "./plugins/FontAwesome";

Vue.config.productionTip = false;
new Vue({
  router,
  store,

  created() {
    store.dispatch("oauth/getToken", null, { root: true });
  },
  render: (h) => h(App),
}).$mount("#app");
