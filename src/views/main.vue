<template>
  <div>
    <img :src="text" :style="{ width: med, heigth: med }" />
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