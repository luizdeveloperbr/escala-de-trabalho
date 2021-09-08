<template>
  <div class="wrap">
    <nav class="navbar is-dark prnt" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
          Selecione Setor:  
          </div>
          <div class="navbar-item">
            <div class="select">
              <select v-model="setor">
                <option v-for="set in setores" >{{ set }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="navbar-item">
          <router-link class="has-text-white" to="/">Inicio</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div v-show="Boolean(setor)" class="buttons">
              <router-link
                class="button"
                :to="{ 
                  name: 'Mensal',
                  params: { setor },
                }"
              >
                Mensal
              </router-link>
              <router-link
                class="button"
                :to="{
                  name: 'Organico',
                  params: { setor },
                }"
                >Orgânico
                </router-link
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
import "../node_modules/bulma/css/bulma.css"
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  name: "App",
  data() {
    return {
      setores: ["mercearia", "cpd", "salgado", "frente_de_loja","limpeza"],
      setor: null,
    };
  },
};
</script>
<style>
@media print {
  .prnt {
    display: none
  }
}
</style>