<template>
  <div class="main">
    <fieldset :disabled="sel <= 0">
      <button class="button is-small" @click="editColab('menos')">
        <span class="icon"><i class="fas fa-lg fa-angle-left"></i></span>
      </button>
    </fieldset>
    <span
      class="tag is-info is-medium"
      :class="{ 'is-danger': Boolean(colaboradores.status) }"
      >{{ list[colaboradores.status] }}</span>
    <fieldset :disabled="sel >= 3">
      <button class="button is-small" @click="editColab('mais')">
        <span class="icon"><i class="fas fa-lg fa-angle-right"></i></span>
      </button>
    </fieldset>
  </div>
</template>
<script>
import { db } from "../db";
const setor = db.ref("setores");
export default {
  name: "status",
  props: ["getReal"],
  data() {
    return {
      colaboradores: {},
      list: ["disponivel", "ferias", "afastado", "licença"],
      sel: 0
      // sel: this.colaboradores.status,
    };
  },
  watch: {
    getReal: {
      immediate: true,
      handler(getReal) {
        this.$rtdbBind(
          "colaboradores",
          setor.child(`/${this.$route.params.setor}/organico/` + getReal)
        );
      },
    },
  },
  methods: {
    editColab(a) {
      a == "menos" ? this.sel-- : this.sel++;
      return this.$firebaseRefs.colaboradores.update({ status: this.sel });
    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
}
</style>