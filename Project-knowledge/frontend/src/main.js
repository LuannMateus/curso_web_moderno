import Vue from 'vue';

import 'font-awesome/css/font-awesome.css';
import './config/bootstrap';

import store from './config/store';
import router from './config/router';


import App from './App';

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = process.env.VUE_APP_AUTH_TOKEN

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')