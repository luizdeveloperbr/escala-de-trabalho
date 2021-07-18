import Vue from 'vue';
import Router from 'vue-router';
import Mensal from './views/Mensal.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:setor',
      name: 'Mensal',
      component: Mensal,
    },
  ],
});
