
import Vue from 'vue';
import { rtdbPlugin } from 'vuefire';
import App from './App.vue';
import router from './router';

import moment from 'moment'
import 'moment/locale/pt-br'
import VueMoment from 'vue-moment';
 
Vue.use(VueMoment, {
    moment
})

Vue.use(rtdbPlugin);

export default new Vue({
  router,
  el: '#root',
  render: (h) => h(App),
});