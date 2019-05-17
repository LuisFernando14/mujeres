import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from "./store";
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import vueCountryRegionSelect from 'vue-country-region-select'
import Places from "google-places-web";

Vue.config.productionTip = false;
Vue.use(vueCountryRegionSelect);


new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app');
