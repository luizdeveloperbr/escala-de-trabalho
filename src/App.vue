<template>
  <div class="wrap">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> {{setor}} </a>
            <div class="navbar-dropdown">
              <a
                class="navbar-item"
                v-for="s in setores"
                @click="setor = s"
                :key="setores.indexOf(s)"
              >
                {{ s }}
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-item">
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link :to="{name: 'Mensal', params: {setor: setor }}" class="button"> Mensal </router-link>
              <router-link
                class="button"
                :to="{
                  name: 'Organico',
                  params: { setor: $route.params.setor },
                }"
                >Orgânico</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import "../node_modules/bulma/css/bulma.css";

export default {
  name: "App",
  data() {
    return {
      setores: ["mercearia", "cpd", "salgados"],
      setor: "Selecione...",
    };
  },
};
</script>
