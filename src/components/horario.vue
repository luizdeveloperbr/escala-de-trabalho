<!-- timeEntrance -->
<template>
  <div>
    <div v-if="show">
      <fieldset :disabled="allow">
        <div class="field has-addons">
          <div class="select is-small">
            <select
              class="is-focused"
              @change="updateHora(false)"
              v-model="ipt"
            >
              <option v-for="h in list">
                {{ h.hora }}
              </option>
            </select>
          </div>
        </div>
      </fieldset>
      <div class="control">
        <button class="button is-small" @click="updateHora(true)">[X]</button>
      </div>
    </div>
    <div v-else>
      {{ getReal.hora || lista[atual.status] }}
    </div>
  </div>
</template>
<script>
import { db } from "../db";
const banco = db.ref("setores");
export default {
  name: "horario",
  props: ["getValue", "getReal", "show"],
  firebase: {
    list: db.ref("horarios/master"),
  },
  data: function() {
    return {
      list: [],
      atual: null,
      lista: [" ", "ferias", "afastado", "licença"],
      anterior: null,
      penultimo: null,
      ipt: this.getReal.hora,
    };
  },
  created() {
    const _static = `${this.$route.params.setor}/organico/${this.getValue}/domingos/`;
    const anterior = Number(this.getReal.id - 1);
    const penultimo = Number(this.getReal.id - 2);
    this.$rtdbBind("anterior", banco.child(_static + anterior));
    this.$rtdbBind("penultimo", banco.child(_static + penultimo));

    return "OK";
  },
  mounted() {
    var url = `${this.$route.params.setor}/organico/${this.getValue}`;
    this.$rtdbBind("atual", banco.child(url));
    return console.log(url);
  },
  computed: {
    allow() {
      var ant = this.anterior.hora;
      if (ant == false) {
        return false;
      } else {
        return Boolean(this.penultimo.hora) == Boolean(ant);
      }
    },
  },
  methods: {
    updateHora(e) {
      if (e) {
        this.ipt = "";
      }
      var obj = { hora: this.ipt };
      var url = `${this.$route.params.setor}/organico/${this.getValue}/domingos/${this.getReal.id}`;
      return banco.child(url).update(obj);
    },
  },
};
</script>
<style>
.select > select {
  padding-right: 6.5px !important;
}
.select:after {
  border: 0px !important;
}
</style>
