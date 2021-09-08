<template>
  <div class="panel" style="margin: 20px">
    <div class="panel-heading">
      <div class="level">
        <div class="level-left">
            <img
              class="level-item"
              src="data:image/jpeg;base64,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
"
            />
        </div>
        <table class="has-text-centered">
          <tr>
            <td>
              <div class="border prnt">
              <label for="month">Selecione o Mês</label>
              <div class="select is-small">
                <select id="month" v-model="monthpick">
                  <option class="is-capitalized" v-for="mes in months" :value="mes" :key="months.indexOf(mes)">{{mes}}</option> 
                </select>
              </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Escala Mensal Setor: <p class="is-uppercase">{{ $route.params.setor }}</p></td>
          </tr>
          <tr>
            <td><p class="is-uppercase">{{ monthpick }} de 2021</p></td>
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
              <tr v-for="colab in banco" :class="{ 'is-selected': colab.edit }">
                <td class="prnt">
                  <a style="color: black!important" class="button is-small" @click="editColab(colab.edit, colab['.key'])" v-if="colab.status <= 0">
                   <span class="icon"><i  class="fas fa-lg fa-edit"></i></span></a>
                </td>
                <td>{{ colab.mat }}</td>
                <td>
                  {{
                    colab.nome
                  }}
                </td>
                <td>{{ colab.hora }}</td>
                <td class="has-text-centered">
                  <horario
                    v-if="colab.edit"
                    :get-real="colab.domingos[$refs.d_0.W]"
                    :get-value="colab['.key']"
                    :status="colab.status"
                  ></horario>
                  <span v-else>{{colab.domingos[$refs.d_0.W].hora}}</span>
                </td>
                <td class="has-text-centered">
                  <folga
                    v-if="colab.edit"
                    :get-value="colab['.key']"
                    :get-real="colab.domingos[$refs.d_0.W]"
                  ></folga>
                  <span v-else>{{colab.domingos[$refs.d_0.W].dia | moment("ddd, DD/MMM")}}</span>
                </td>
                <td class="has-text-centered">
                  <horario
                    v-if="colab.edit"
                    :get-real="colab.domingos[$refs.d_1.W]"
                    :get-value="colab['.key']"
                    :status="colab.status"
                  ></horario>
                  <span v-else>{{colab.domingos[$refs.d_1.W].hora}}</span>
                </td>
                <td class="has-text-centered">
                  <folga
                    v-if="colab.edit"
                    :get-value="colab['.key']"
                    :get-real="colab.domingos[$refs.d_1.W]"
                  ></folga>
                  <span v-else>{{colab.domingos[$refs.d_1.W].dia | moment("ddd, DD/MMM")}}</span>
                </td>
                <td class="has-text-centered">
                  <horario
                    v-if="colab.edit"
                    :get-real="colab.domingos[$refs.d_2.W]"
                    :get-value="colab['.key']"
                    :status="colab.status"
                  ></horario>
                  <span v-else>{{colab.domingos[$refs.d_2.W].hora}}</span>
                </td>
                <td class="has-text-centered">
                  <folga
                    v-if="colab.edit"
                    :get-value="colab['.key']"
                    :get-real="colab.domingos[$refs.d_2.W]"
                  ></folga>
                  <span v-else>{{colab.domingos[$refs.d_2.W].dia | moment("ddd, DD/MMM")}}</span>
                </td>
                <td class="has-text-centered hora">
                  <horario
                    v-if="colab.edit"
                    :get-real="colab.domingos[$refs.d_3.W]"
                    :get-value="colab['.key']"
                    :status="colab.status"
                  ></horario>
                  <span v-else>{{colab.domingos[$refs.d_3.W].hora}}</span>
                </td>
                <td class="has-text-centered">
                  <folga
                    v-if="colab.edit"
                    :get-value="colab['.key']"
                    :get-real="colab.domingos[$refs.d_3.W]"
                  ></folga>
                  <span v-else>{{colab.domingos[$refs.d_3.W].dia | moment("ddd, DD/MMM")}}</span>
                </td>
                <td class="has-text-centered hora" v-if="condFivDom">
                  <horario
                    v-if="colab.edit"
                    :get-real="colab.domingos[$refs.d_4.W]"
                    :get-value="colab['.key']"
                    :status="colab.status"
                  ></horario>
                  <span v-else>{{colab.domingos[$refs.d_4.W].hora}}</span>
                </td>
                <td v-if="condFivDom" class="dia has-text-centered">
                  <folga
                    v-if="colab.edit"
                    :get-value="colab['.key']"
                    :get-real="colab.domingos[$refs.d_4.W]"
                  ></folga>
                  <span v-else>{{colab.domingos[$refs.d_4.W].dia | moment("ddd, DD/MMM")}}</span>
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
import {db} from "../db";
import domingo from "../components/domingo.vue";
import horario from "../components/horario.vue";
import folga from "../components/folga.vue";
const setores = db.ref("setores");
export default {
  name: "Mensal",
  data() {
    return {
      banco: [],
      months: moment.months(),
      monthpick: moment().add(1,'month').format('MMMM'),
      edit: true,
    };
  },
  methods: {
    editColab(idcol, coladKey) {
      const reff = this.$firebaseRefs.banco.child(coladKey)
          idcol == true ? reff.update({ edit: false }) : reff.update({ edit: true })
      return "Changed";
      //return this.$firebaseRefs.banco.child(coladKey).update({edit: !idcol})
    },
  },
  computed: {
    id() {
      return `${this.$route.params.setor}/organico`;
    },
    condFivDom() {
      return (
        moment(this.monthpick, "MMMM").startOf("week").month() ===
        moment(this.monthpick, "MMMM").add(4, "w").month()
      );
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
        this.$rtdbBind("banco", setores.child(id).orderByChild('funcao/cargo'));
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

.border{
  border: 1px solid black;
  border-radius: 15px;
  padding: 4px
}
</style>