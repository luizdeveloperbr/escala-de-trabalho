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
      path: '/mensal/:setor',
      name: 'Mensal',
      component: Mensal,
    },
    /*{
      path: '/interjornada',
      name: 'Interjornada',
      component: Interjornada,
    },*/
    {
      path: '/organico/:setor',
      name: 'Organico',
      component: Organico,
    },
  ],
});
