<template>
  <div>
    <div class="buttons">
      <router-link class="button" v-for="s in $parent.setores" :to="{name:'Mensal',params:{setor:s}}">{{s}}</router-link>
    </div>
  </div>
</template>
<script>

export default {
  name: "index",
  data() {
    return {
      text: "",
      med: "300px",
    };
  },
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>