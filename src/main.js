import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import vueCountryRegionSelect from 'vue-country-region-select'
import Places from "google-places-web";

axios.defaults.baseURL = 'http://localhost:5000'; // same as the Url the server listens to
Vue.prototype.$http = axios;

Vue.config.productionTip = false;
Vue.use(vueCountryRegionSelect);


new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app');
