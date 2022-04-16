<template>
  <div class="wrap">
    <nav
      class="navbar is-dark prnt"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand ml-2">
        <router-link class="navbar-item" to="/"
          ><span class="icon"><i class="fa fa-2x fa-home"></i></span
        ></router-link>
      </div>
      <div class="navbar-end mr-2 my-auto">
        <router-link
          class="
            navbar-item
            has-background-white has-text-black has-text-weight-light
            my-1
          "
          :to="{
            name: 'Organico',
            params: { setor: $route.params.setor },
          }"
          >Organico
        </router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import "../node_modules/bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  name: "App",
  data() {
    return {
      setores: ["mercearia", "cpd", "salgado", "frente_de_loja", "limpeza"],
    };
  },
  computed: {
    setor() {
      this.$route.params.setor;
    },
  },
};
</script>
<style>
@media print {
  .prnt {
    display: none;
  }
}
a:hover {
  color: white;
}
</style>