<template>
  <div class="wrap">
    <div class="table-container">
      <table class="table is-bordered">
        <tr id="head-list" class="has-text-centered">
          <td class="print_cls"></td>
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
          <td class="print_cls"></td>
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
        <tr
          v-for="colab in banco"
          :class="{ 'is-selected': colab.edit }"
          :key="banco.indexOf(colab['.key'])"
        >
          <td class="p-0 print_cls">
            <a
              class="button is-rounded is-success is-small"
              @click="editColab(colab.edit, colab['.key'])"
              ><mdicon name="alert" size="22"
            /></a>
          </td>
          <td>{{ colab.mat }}</td>
          <td>{{ colab.nome }}</td>
          <td></td>
          <td class="has-text-centered hora">
            <horario
              v-if="colab.edit"
              :get-real="colab.domingos[$refs.d_0.W].hora"
              :get-value="colab['.key']"
              :id="$refs.d_0.W"
            ></horario>
            <span v-else>{{ colab.domingos[$refs.d_0.W].hora }}</span>
          </td>
          <td class="dia has-text-centered">
            <folga
             v-if="colab.edit"
             :get-value="colab['.key']" 
             :get-real="colab.domingos[$refs.d_0.W].dia"
             :id="$refs.d_0.W"
            ></folga>
            <span v-else>{{ colab.domingos[$refs.d_0.W].dia | moment('ddd, DD/MMM')}}</span>
          </td>
          <td class="has-text-centered hora">
             <horario
              v-if="colab.edit"
              :get-real="colab.domingos[$refs.d_1.W].hora"
              :get-value="colab['.key']"
              :id="$refs.d_1.W"
            ></horario>
            <span v-else>{{ colab.domingos[$refs.d_1.W].hora }}</span>
          </td>
          <td class="dia has-text-centered">
            <folga
             v-if="colab.edit"
             :get-value="colab['.key']" 
             :get-real="colab.domingos[$refs.d_1.W].dia"
             :id="$refs.d_1.W"
            ></folga>
            <span v-else>{{ colab.domingos[$refs.d_1.W].dia | moment('ddd, DD/MMM')}}</span>
          </td>
          <td class="has-text-centered hora">
            <horario
              v-if="colab.edit"
              :get-real="colab.domingos[$refs.d_2.W].hora"
              :get-value="colab['.key']"
              :id="$refs.d_2.W"
            ></horario>
            <span v-else>{{ colab.domingos[$refs.d_2.W].hora }}</span>
          </td>
          <td class="dia has-text-centered">
            <folga
             v-if="colab.edit"
             :get-value="colab['.key']" 
             :get-real="colab.domingos[$refs.d_2.W].dia"
             :id="$refs.d_2.W"
            ></folga>
            <span v-else>{{ colab.domingos[$refs.d_2.W].dia | moment('ddd, DD/MMM')}}</span>
          </td>
          <td class="has-text-centered hora">
            <horario
              v-if="colab.edit"
              :get-real="colab.domingos[$refs.d_3.W].hora"
              :get-value="colab['.key']"
              :id="$refs.d_3.W"
            ></horario>
            <span v-else>{{ colab.domingos[$refs.d_3.W].hora }}</span>
          </td>
          <td class="dia has-text-centered">
            <folga
             v-if="colab.edit"
             :get-value="colab['.key']" 
             :get-real="colab.domingos[$refs.d_3.W].dia"
             :id="$refs.d_3.W"
            ></folga>
            <span v-else>{{ colab.domingos[$refs.d_3.W].dia | moment('ddd, DD/MMM')}}</span>
          </td>
          <td class="has-text-centered hora" v-if="condFivDom">
             <horario
              v-if="colab.edit"
              :get-real="colab.domingos[$refs.d_4.W].hora"
              :get-value="colab['.key']"
              :id="$refs.d_4.W"
            ></horario>
            <span v-else>{{ colab.domingos[$refs.d_4.W].hora }}</span>
          </td>
          <td v-if="condFivDom" class="dia has-text-centered">
            <folga
             v-if="colab.edit"
             :get-value="colab['.key']" 
             :get-real="colab.domingos[$refs.d_4.W].dia"
             :id="$refs.d_4.W"
            ></folga>
            <span v-else>{{ colab.domingos[$refs.d_4.W].dia | moment('ddd, DD/MMM')}}</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="columns">
      <div class="column">
        <table class="table is-bordered">
          <tr>
            <td>luiz eduardo de souza lopes</td>
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
</template>
<script>
import moment from 'moment';
import { db } from '../db';
import domingo from '../components/domingo.vue';
import horario from '../components/horario.vue';
import folga from '../components/folga.vue';

const setores = db.ref('setores');
export default {
  name: 'Mensal',
  data() {
    return {
      banco: [],
      setDom_0: false,
      setDom_1: false,
      setDom_2: false,
      setDom_3: false,
      setDom_4: false,
      edit: true,
    };
  },
  methods: {
    editColab(idcol, coladKey) {
      if (idcol === true) {
        this.$firebaseRefs.banco.child(coladKey).update({ edit: false });
      } else {
        this.$firebaseRefs.banco.child(coladKey).update({ edit: true });
      }
      return 'Changed';
    },
  },
  computed: {
    id() {
      return `${this.$route.params.setor}/organico`;
    },
    condFivDom() {
      return (
        moment(this.$parent.monthpick, 'MMMM').startOf('week').month()
        === moment(this.$parent.monthpick, 'MMMM').add(4, 'w').month()
      );
    },
  },
  components: {
    domingo,
    horario,
    folga
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        this.$rtdbBind('banco', setores.child(id));
      },
    },
  },
};
</script>
<style>
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
.hora {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dia {
  padding-left: 6px !important;
  padding-right: 6px !important;
  width: 70px;
}
.list > td {
  padding: 5px !important;
}
#head-list > td {
  text-align: center;
}
.mat-ret {
  padding-left: 4px !important;
  padding-right: 4px !important;
}
</style>
