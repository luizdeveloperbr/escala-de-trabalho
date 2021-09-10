<template>
  <div>
    <img :src="text" />
  </div>
</template>
<script>
import { storage } from "../db";

export default {
  name: "index",
  data() {
    return { text: "https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif" };
  },
  async mounted() {
    const url = await storage.ref("index.png").getDownloadURL();
    this.text = url
  },
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>