<!-- timeEntrance -->
<template>
  <div>
    <div v-if="show">
    <fieldset :disabled="allow">
      <div class="field has-addons">
        <div class="select is-small">
          <select class="is-focused" @change="updateHora" v-model="ipt">
            <option v-for="h in list">
              {{ h.hora }}
            </option>
          </select>
        </div>
      </div>
    </fieldset>
    <div class="control">
      <button class="button is-small" @click="rem">[X]</button>
    </div>
    </div>
    <div v-else>
      <span>{{getReal.hora}}</span>
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
  data() {
    return {
      list: [],
      //atual: "",
      anterior: null,
      penultimo: "",
      ipt: this.getReal.hora,
    };
  },
  methods: {
    rem() {
      this.ipt = "";
      var obj = { hora: this.ipt };
      var url = `${this.$route.params.setor}/organico/${this.getValue}/domingos/${this.getReal.id}`;
      return banco.child(url).update(obj);
    },
    updateHora() {
      var obj = { hora: this.ipt };
      var url = `${this.$route.params.setor}/organico/${this.getValue}/domingos/${this.getReal.id}`;
      return banco.child(url).update(obj);
    },
  },
  computed: {
    allow() {
      var ant = this.anterior.hora
      if (ant == false){
        return false
      }else{
      return Boolean(this.penultimo.hora) == Boolean(ant)
      }
    },
  },
  created() {
    var _anterior =
      `${this.$route.params.setor}/organico/${this.getValue}/domingos/` +
      Number(this.getReal.id - 1);
    var _penultimo =
      `${this.$route.params.setor}/organico/${this.getValue}/domingos/` +
      Number(this.getReal.id - 2);
    this.$rtdbBind("anterior", banco.child(_anterior));
    this.$rtdbBind("penultimo", banco.child(_penultimo));

    return [this.penultimo.hora, this.anterior.hora];
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
