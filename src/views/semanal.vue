<template>
  <div class="main">
    <hora-semana :texto="mapp[0]" :colabs="colabs" />
    <hora-semana :texto="mapp[1]" :colabs="colabs" />
  </div>
</template>
<script>
import horaSemana from "../components/horaSemana.vue";
import { db } from "../db";
const banco = db.ref("setores");
export default {
  components: { horaSemana },
  props: ["setor"],
  name: "semanal",
  data() {
    return {
      colabs: [],
      text: "String",
    };
  },
  computed: {
    url() {
      return `${this.$route.params.setor}/organico`;
    },
    mapp(){
        // map para separar por horario de forma unica para cada colanvorador
        let ret = []
        const ddb = this.colabs
        ddb.map(e => ret.push(e.domingos[this.$route.query.week].hora))
        return ret
    },
  },
  watch: {
    url: {
      immediate: true,
      handler(url) {
        this.$rtdbBind("colabs", banco.child(url));
      },
    },
  },
  components: {
    horaSemana,
  },
};
</script>