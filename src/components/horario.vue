<!-- timeEntrance -->
<template>
  <div>
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
</template>
<script>
import { db } from "../db";
const banco = db.ref("setores");
export default {
  name: "horario",
  props: ["getValue", "getReal"],
  firebase: {
    list: db.ref("horarios/master"),
  },
  data() {
    return {
      list: [],
      //atual: "",
      anterior: null,
      penultimo: "",
      ipt: this.getReal,
    };
  },
  methods: {
    rem() {
      this.ipt = "";
      var obj = { hora: this.ipt };
      var url = `${this.$route.params.setor}/organico/${this.getValue}/domingos/${this.$attrs.id}`;
      return banco.child(url).update(obj);
    },
    updateHora() {
      var obj = { hora: this.ipt };
      var url = `${this.$route.params.setor}/organico/${this.getValue}/domingos/${this.$attrs.id}`;
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
    //var _atual =
     // `${this.$route.params.setor}/organico/${this.getValue}/domingos/` +
    //  this.$attrs.id;
    var _anterior =
      `${this.$route.params.setor}/organico/${this.getValue}/domingos/` +
      Number(this.$attrs.id - 1);
    var _penultimo =
      `${this.$route.params.setor}/organico/${this.getValue}/domingos/` +
      Number(this.$attrs.id - 2);
    //this.$rtdbBind("atual", banco.child(_atual));
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
