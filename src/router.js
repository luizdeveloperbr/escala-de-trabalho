import Vue from 'vue';
import Router from 'vue-router';
import Mensal from './views/Mensal.vue';
import Organico from './views/organico.vue'
//import Interjornada from './views/Interjornada.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/m/:setor',
      name: 'Mensal',
      component: Mensal,
    },
    /*{
      path: '/interjornada',
      name: 'Interjornada',
      component: Interjornada,
    },*/
    {
      path: '/:setor/organico',
      name: 'Organico',
      component: Organico,
    },
  ],
});
