<!--folga.vue-->
<template>
  <div>
    <fieldset :disabled="allow">
      <div>
        <input
          type="date"
          v-model="nome"
          :min="min"
          :max="max"
          class="input is-size-7"
          @change="updateDia(false)"
        />
      </div>
    </fieldset>
    <div class="control">
      <button class="button is-small" @click="updateDia(true)">[X]</button>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import {db} from "../db";
const banco = db.ref("setores");
export default {
  name: "folga",
  props: ["getValue", "getReal"],
  data() {
    return {
      nome: this.getReal.dia,
      anterior:null,
      penultimo:null,
    };
  },
  created() {
    var url_ant = `${this.$route.params.setor}/organico/${this.getValue}/domingos/` + Number(this.getReal.id - 1)
    var url_pen = `${this.$route.params.setor}/organico/${this.getValue}/domingos/` + Number(this.getReal.id - 2)
     this.$rtdbBind("anterior", banco.child(url_ant))
     this.$rtdbBind("penultimo", banco.child(url_pen))
    return console.log('created');
  },
  computed: {
    allow() {
      var ant = this.anterior.dia;
      if (ant == false) {
        return false;
      } else {
        return Boolean(this.penultimo.dia) === Boolean(ant);
      }
    },
    display() {
      if (this.getReal.dia) {
        return moment(this.getReal.dia, "YYYY-MM-DD").format("ddd, DD/MMM");
      } else {
        return " ";
      }
    },
   max() {
      return moment(this.anterior.dia, "YYYY-MM-DD")
        .add(9, "days")
        .format("YYYY-MM-DD");
    },
    min() {
      return moment(this.anterior.dia, "YYYY-MM-DD")
        .add(1, "days")
        .format("YYYY-MM-DD");
    },
  },
  methods: {
    updateDia(e) {
      if (e) {
        this.nome = "";
      }
      var obj = { dia: this.nome };
      var url = `${this.$route.params.setor}/organico/${this.getValue}/domingos/${this.getReal.id}`;
      return banco.child(url).update(obj);
    },
  },
};
</script>
<style>
.input::placeholder {
  color: black !important;
}
.input {
  min-width: 75px !important;
}
</style>