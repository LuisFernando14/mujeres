import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css'
import VueHead from 'vue-head'
 
Vue.use(VueHead)


axios.defaults.baseURL = 'https://users220190523045749.azurewebsites.net'; // same as the Url the server listens to
Vue.prototype.$http = axios;
// https://users220190523045749.azurewebsites.net/api/users

Vue.config.productionTip = false;


new Vue({
 router,
 axios,
 render: h => h(App),
}).$mount('#app');