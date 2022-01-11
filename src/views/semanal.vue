<template>
  <div class="main">
    <div class="has-text-centered mx-6">
      <p class="is-size-3">{{ showDate }}</p>
    </div>
    <hora-semana
      v-for="block in mapp"
      :texto="block[0].hora"
      :class="{ 'is-hidden': block[0].hora == 0 }"
      :colabs="block"
      :key="mapp.indexOf(block)"
    />
  </div>
</template>
<script>
import moment from "moment";
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
    };
  },
  computed: {
    url() {
      return `${this.$route.params.setor}/organico`;
    },
    mapp() {
      //map para separar por horario de forma unica para cada colanvorador
      let data = [];
      const ddb = this.colabs;
      ddb.map((e) =>
        data.push({
          nome: e.nome,
          mat: e.mat,
          cargo: e.funcao.cargo,
          hora: e.domingos[this.$route.query.week].hora,
          dia:e.domingos[this.$route.query.week].dia,
        })
      );

      const uniqueTipos = [...new Set(data.map((item) => item.hora))];
      console.log(uniqueTipos);
      const filterByTipo = (hora) => data.filter((item) => item.hora === hora);

      const groupedByTipo = uniqueTipos.map(filterByTipo);
      return groupedByTipo;
    },
    showDate() {
      var getWeek = moment().week(this.$route.query.week).toDate();
      return moment(getWeek)
        .add(2, "w")
        .subtract(2, "d")
        .format("dddd, DD MMMM YYYY");
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