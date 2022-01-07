<template>
  <div class="main">
        <hora-semana v-for="block in mapp" :texto="block[0].hora" :class="{'is-hidden':block[0].hora==0}" :colabs="block" :key="mapp.indexOf(block)" />
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
    mapp() {
      //map para separar por horario de forma unica para cada colanvorador
        let data = []
        const ddb = this.colabs
        ddb.map((e) => (data.push({nome:e.nome,mat:e.mat,hora:e.domingos[this.$route.query.week].hora})))
        
      /*
      [
        { nome: "João", mat: "A" },
        { nome: "pedro", mat: "A" },
        { nome: "maria", mat: "B" },
        { nome: "carlos", mat: "C" },
      ];
      */

      const uniqueTipos = [...new Set(data.map((item) => item.hora))];
      console.log(uniqueTipos)
      const filterByTipo = (hora) => data.filter((item) => item.hora === hora);
     
      const groupedByTipo = uniqueTipos.map(filterByTipo);
      return groupedByTipo
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