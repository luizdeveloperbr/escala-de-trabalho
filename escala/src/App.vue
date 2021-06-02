<script>
export default {
  name: 'App',
  data() {
    return {
      texto: 'Escala',
    };
  },
};
</script>

<template>
  <div :class="$style.App">
    <h1>Bem Vindo ao App {{texto}}</h1>
  </div>
</template>

<style module>
  .App {
    padding: 20px;
  }
</style>
