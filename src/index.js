import Vue from 'vue';
import { rtdbPlugin } from 'vuefire';
import App from './App.vue';
import router from './router';

const moment = require('moment')
require('moment/locale/pt-br')
 
Vue.use(require('vue-moment'), {
    moment
})
Vue.use(rtdbPlugin);

export default new Vue({
  router,
  el: '#root',
  render: (h) => h(App),
});
