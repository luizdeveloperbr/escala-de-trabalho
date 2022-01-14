<template>
  <div class="panel" style="margin: 20px">
    <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <img class="level-item" :src="logo" />
        </div>
        <table class="has-text-centered">
          <tr>
            <td>
              <div class="border prnt">
                <label for="month">Selecione o Mês</label>
                <div class="select is-small">
                  <select id="month" v-model="monthpick">
                    <option
                      class="is-capitalized"
                      v-for="mes in months"
                      :value="mes"
                      :key="months.indexOf(mes)"
                    >
                      {{ mes }}
                    </option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Escala Mensal Setor:
              <p class="is-uppercase">{{ $route.params.setor }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="is-uppercase">{{ monthpick }} de 2022</p>
            </td>
          </tr>
        </table>
        <div class="level-right">
          <p class="content is-small">
            LIDER COMERCIO E IND. LTDA <br />ROD BR-316 KM 02 - GUANABARA -
            ANANINDEUA <br />(91) 4008-1012 | CNPJ: 05.054.671/0014-73
          </p>
        </div>
      </div>
    </div>
    <div class="panel-block" style="display: block !important">
      <div>
        <div class="wrap">
          <div class="table-container">
            <table class="table is-bordered">
              <tr id="head-list" class="has-text-centered">
                <td class="prnt"></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Domingo</td>
                <td></td>
                <td>Domingo</td>
                <td></td>
                <td>Domingo</td>
                <td></td>
                <td>Domingo</td>
                <td></td>
                <td v-if="condFivDom">Domingo</td>
                <td v-if="condFivDom"></td>
              </tr>
              <tr id="head-list" class="has-text-centered">
                <td class="prnt"></td>
                <td class="mat-ret">Matricula</td>
                <td>Colaborador</td>
                <td class="mat-ret">Retorno</td>
                <td><domingo add-weeks="0" ref="d_0"></domingo></td>
                <td>folga</td>
                <td><domingo add-weeks="1" ref="d_1"></domingo></td>
                <td>folga</td>
                <td><domingo add-weeks="2" ref="d_2"></domingo></td>
                <td>folga</td>
                <td><domingo add-weeks="3" ref="d_3"></domingo></td>
                <td>folga</td>
                <td v-show="condFivDom">
                  <domingo add-weeks="4" ref="d_4"></domingo>
                </td>
                <td v-if="condFivDom">folga</td>
              </tr>
              <tr v-for="colab in banco" :class="{ 'is-selected': colab.edit }" :key="banco.indexOf(colab)">
                <td class="prnt">
                  <a
                    style="color: black !important"
                    class="button is-small"
                    @click="editColab(colab.edit, colab['.key'])"
                    v-if="colab.status <= 0"
                  >
                    <span class="icon"><i class="fas fa-lg fa-edit"></i></span
                  ></a>
                </td>
                <td>{{ colab.mat }}</td>
                <td>
                  {{ colab.nome }}
                </td>
                <td>{{ colab.hora }}</td>
                <td class="has-text-centered">
                  <horario
                    v-if="colab.edit"
                    :get-real="colab.domingos[$refs.d_0.W]"
                    :get-value="colab['.key']"
                    :status="colab.status"
                  ></horario>
                  <span v-else>{{
                    colab.domingos[$refs.d_0.W].hora || s[colab.status]
                  }}</span>
                </td>
                <td class="has-text-centered">
                  <folga
                    v-if="colab.edit"
                    :get-value="colab['.key']"
                    :get-real="colab.domingos[$refs.d_0.W]"
                  ></folga>
                  <span v-else>{{
                    colab.domingos[$refs.d_0.W].dia | moment("ddd, DD/MMM")
                  }}</span>
                </td>
                <td class="has-text-centered">
                  <horario
                    v-if="colab.edit"
                    :get-real="colab.domingos[$refs.d_1.W]"
                    :get-value="colab['.key']"
                    :status="colab.status"
                  ></horario>
                  <span v-else>{{
                    colab.domingos[$refs.d_1.W].hora || s[colab.status]
                  }}</span>
                </td>
                <td class="has-text-centered">
                  <folga
                    v-if="colab.edit"
                    :get-value="colab['.key']"
                    :get-real="colab.domingos[$refs.d_1.W]"
                  ></folga>
                  <span v-else>{{
                    colab.domingos[$refs.d_1.W].dia | moment("ddd, DD/MMM")
                  }}</span>
                </td>
                <td class="has-text-centered">
                  <horario
                    v-if="colab.edit"
                    :get-real="colab.domingos[$refs.d_2.W]"
                    :get-value="colab['.key']"
                    :status="colab.status"
                  ></horario>
                  <span v-else>{{
                    colab.domingos[$refs.d_2.W].hora || s[colab.status]
                  }}</span>
                </td>
                <td class="has-text-centered">
                  <folga
                    v-if="colab.edit"
                    :get-value="colab['.key']"
                    :get-real="colab.domingos[$refs.d_2.W]"
                  ></folga>
                  <span v-else>{{
                    colab.domingos[$refs.d_2.W].dia | moment("ddd, DD/MMM")
                  }}</span>
                </td>
                <td class="has-text-centered hora">
                  <horario
                    v-if="colab.edit"
                    :get-real="colab.domingos[$refs.d_3.W]"
                    :get-value="colab['.key']"
                    :status="colab.status"
                  ></horario>
                  <span v-else>{{
                    colab.domingos[$refs.d_3.W].hora || s[colab.status]
                  }}</span>
                </td>
                <td class="has-text-centered">
                  <folga
                    v-if="colab.edit"
                    :get-value="colab['.key']"
                    :get-real="colab.domingos[$refs.d_3.W]"
                  ></folga>
                  <span v-else>{{
                    colab.domingos[$refs.d_3.W].dia | moment("ddd, DD/MMM")
                  }}</span>
                </td>
                <td class="has-text-centered hora" v-if="condFivDom">
                  <horario
                    v-if="colab.edit"
                    :get-real="colab.domingos[$refs.d_4.W]"
                    :get-value="colab['.key']"
                    :status="colab.status"
                  ></horario>
                  <span v-else>{{
                    colab.domingos[$refs.d_4.W].hora || s[colab.status]
                  }}</span>
                </td>
                <td v-if="condFivDom" class="dia has-text-centered">
                  <folga
                    v-if="colab.edit"
                    :get-value="colab['.key']"
                    :get-real="colab.domingos[$refs.d_4.W]"
                  ></folga>
                  <span v-else>{{
                    colab.domingos[$refs.d_4.W].dia | moment("ddd, DD/MMM")
                  }}</span>
                </td>
              </tr>
            </table>
          </div>
          <div class="columns">
            <div class="column">
              <table class="table is-bordered">
                <tr v-for="nom in banco" :key="banco.indexOf(nom)">
                  <td>{{ nom.nome }}</td>
                  <td>{{ nom.funcao.cargo }}</td>
                  <td style="min-width: 300px"></td>
                </tr>
              </table>
            </div>
            <div class="column">
              <h3 class="sign">Gerência</h3>
              <h3 class="sign">Enc. de Setor</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { db, storage } from "../db";
import domingo from "../components/domingo.vue";
import horario from "../components/horario.vue";
import folga from "../components/folga.vue";
const setores = db.ref("setores");
export default {
  name: "Mensal",
  data() {
    return {
      banco: [],
      s: [" ", "FERIAS", "AFASTADO", "LICENÇA"],
      logo: null,
      months: moment.months(),
      monthpick: moment().format("MMMM"),
      edit: true,
    };
  },
  async mounted() {
    const url = await storage.ref("image.jpg").getDownloadURL();
    this.logo = url;
  },
  methods: {
    editColab(idcol, coladKey) {
      return this.$firebaseRefs.banco.child(coladKey).update({ edit: !idcol });
    },
  },
  computed: {
    id() {
      return `${this.$route.params.setor}/organico`;
    },
    condFivDom() {
      let w_1 = moment(this.monthpick, "MMMM").startOf("week").month();
      let w_2 = moment(this.monthpick, "MMMM").add(4, "w").month();
      if(w_1 == 11){
        return true
      }
        return w_1 === w_2;
    },
  },
  components: {
    domingo,
    horario,
    folga,
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        this.$rtdbBind("banco", setores.child(id).orderByChild("funcao/cargo"));
      },
    },
  },
};
</script>
<style scoped>
.sign {
  border-top-width: 2px;
  border-top-color: black;
  border-top: solid;
  text-align: center;
  margin-top: 50px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.border {
  border: 1px solid black;
  border-radius: 15px;
  padding: 4px;
}
</style>