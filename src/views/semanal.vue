<template>
  <div class="panel" style="margin:20px">
    <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <img class="level-item" :src="logo" />
        </div>
        <div class="level-right">
          <p class="content is-small">
            LIDER COMERCIO E IND. LTDA <br />ROD BR-316 KM 02 - GUANABARA -
            ANANINDEUA <br />(91) 4008-1012 | CNPJ: 05.054.671/0014-73
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="has-text-centered column mx-6">
          <p class="is-size-3 is-capitalized">
            Setor: {{ $parent.$route.params.setor }}
          </p>
        </div>
        <div class="has-text-centered column mx-6">
          <!--<p class="is-size-3 is-capitalized">{{ showDate }}</p>-->
        </div>
      </div>
    </div>
    <div class="panel-block" style="display: block!important">
      <hora-semana v-for="block in mapp" :texto="block[0].hora" :class="{ 'is-hidden': block[0].hora == 0 }"
        :colabs="block" :key="mapp.indexOf(block)" />
    </div>
  </div>
</template>
<script>
import moment from "moment";
import horaSemana from "../components/horaSemana.vue";
import { db, storage } from "../db";
const banco = db.ref("setores");
export default {
  components: { horaSemana },
  props: ["setor"],
  name: "semanal",
  data() {
    return {
      colabs: [],
      logo: ""
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
          folga: e.folga,
        })
      );

      const uniqueTipos = [...new Set(data.map((item) => item.hora))];
      const filterByTipo = (hora) => data.filter((item) => item.hora === hora);

      const groupedByTipo = uniqueTipos.map(filterByTipo);
      return groupedByTipo;
    },
    showDate() {
return moment(moment().isoWeek(+this.$route.params.week).toDate()).format("dddd, DD MMMM YYYY");

     },
  },
  async mounted() {
    const url = await storage.ref("image.jpg").getDownloadURL();
    this.logo = url;
  },
  watch: {
    url: {
      immediate: true,
      handler(url) {
        this.$rtdbBind("colabs", banco.child(url));
      },
    },
  },
};
</script>