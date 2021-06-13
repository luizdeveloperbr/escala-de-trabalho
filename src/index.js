import Vue from 'vue';
import App from './App.vue';
import router from './router';

export default new Vue({
  router,
  el: '#root',
  render: (h) => h(App),
});
