<template>
  <div class="main">
    <div>
      <button class="button is-small" @click="editColab('menos')">-</button>
    </div>
<p>{{list[colaboradores.status]}}</p>
    <div>
      <button class="button is-small" @click="editColab('mais')">+</button>
    </div>
  </div>
</template>
<script>
import {db} from '../db'
const setor = db.ref('setores')
export default {
  name: "status",
  props: ["getReal"],
  data() {
    return {
        colaboradores: {},
      list: ["disponivel", "ferias", "afastado", "licença"],
      sel: 0,
    };
  },
  computed: {
    select() {
        return 0
    },
  },
  watch:{
      getReal: {
      immediate: true,
      handler(getReal) {
        this.$rtdbBind("colaboradores", setor.child(`/${this.$route.params.setor}/organico/` + getReal));
      },
    },
  },
  methods: {
    editColab(a) {
        if (a == 'menos'){
            this.sel--}else{
            this.sel++
            }
      return this.$firebaseRefs.colaboradores.update({ status: this.sel });

    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
}
.main > input {
  max-width: 100px;
}
</style>