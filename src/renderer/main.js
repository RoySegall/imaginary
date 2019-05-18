import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCopy,
  faPlay,
  faPause,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/pro-light-svg-icons';

library.add(faCopy, faPlay, faPause, faAngleDoubleLeft, faAngleDoubleRight, faAngleRight, faAngleLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
