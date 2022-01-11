<!-- horario.vue -->
<template>
  <div>
      <fieldset :disabled="allow">
        <div class="field has-addons">
          <div class="select is-small">
            <select
              class="is-focused"
              @change="updateHora(false)"
              v-model="ipt"
            >
              <option v-for="h in list" :key="list.indexOf(h)">
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
</template>
<script>
import {db} from "../db";
const banco = db.ref("setores");
export default {
  name: "horario",
  props: ["getValue", "getReal"],
  firebase: {
    list: db.ref("horarios/master"),
  },
  data: function() {
    return {
      list: [],
      anterior:{},
      penultimo:{},
      ipt: this.getReal.hora,
    };
  },
  mounted(){
    var url_ant = `${this.$route.params.setor}/organico/${this.getValue}/domingos/` + Number(this.getReal.id - 1)
    var url_pen = `${this.$route.params.setor}/organico/${this.getValue}/domingos/` + Number(this.getReal.id - 2)
     this.$rtdbBind("anterior", banco.child(url_ant))
     this.$rtdbBind("penultimo", banco.child(url_pen))
    return console.log('updated');
  },
  computed: {
    allow() {
      var ant = this.anterior.hora;
      var pen = this.penultimo.hora;
      // fix virada de ano mes 11 > mes 0
      ///if(pen !== ){
      if (ant == false) {
        return false;
      } else {
        return Boolean(pen) == Boolean(ant);
      }
     // }//fix
    }
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
<style scoped>
.select > select {
  padding-right: 6.5px !important;
}
.select:after {
  border: 0px !important;
}
</style>