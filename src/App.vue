<script>
import '../node_modules/bulma/css/bulma.css';
import moment from 'moment';

moment.locale('pt-br');
export default {
  name: 'App',
  data() {
    return {
      meses: moment.months(),
      setores: ['mercearia', 'cpd', 'salgados'],
      monthpick: '',
    };
  },
};
</script>

<template>
  <div class="wrap">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Setores </a>

            <div class="navbar-dropdown">
              <router-link
                class="navbar-item"
                v-for="s in setores"
                :to="{ name: 'Mensal', params: { setor: s } }"
            >
                {{s}}
              </router-link>
            </div><!--tes-->
          </div>
        </div>
        <div class="navbar-item">
        <div class="select">
        <select v-model="monthpick">
        <router-link :to="{name: 'Mensal', query: {mes: mes}}" v-for="mes in meses" tag="option">{{mes}}</router-link>
        </select>
        </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                Horarios
              </a>
              <a class="button is-light"> Orgânico </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
