<!--folga.vue-->
<template>
<div>
<fieldset :disabled="allow">
  <div>
     <input
      type="date"
      v-model="nome"
      :min="anterior.dia"
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
import moment from 'moment'
import {db} from '../db'
const banco = db.ref('setores')

export default {
  name: "folga",
  props: ["getValue", "getReal"],
  data(){
   return {
     nome: this.getReal,
     anterior: null,
     penultimo: null,
     min:'',
     }
  },
  created() {
    var _anterior =
      `${this.$route.params.setor}/organico/${this.getValue}/domingos/` +
      Number(this.$attrs.id - 1);
    var _penultimo =
      `${this.$route.params.setor}/organico/${this.getValue}/domingos/` +
      Number(this.$attrs.id - 2);
    this.$rtdbBind("anterior", banco.child(_anterior));
    this.$rtdbBind("penultimo", banco.child(_penultimo));

    return [this.penultimo.hora, this.anterior.hora];
  
  },
computed:{
  allow(){
      var ant = this.anterior.dia
      if (ant == false){
        return false
      }else{
      return Boolean(this.penultimo.dia) === Boolean(ant)
      }
  },
  max(){
    return moment(this.anterior.dia, 'YYYY-MM-DD').add(8, 'days').format('YYYY-MM-DD')
  }
},
  methods:{
    updateDia(e) {
      if(e){
      this.nome = "";
      }
      var obj = {dia: this.nome}
      var url = `${this.$route.params.setor}/organico/${this.getValue}/domingos/${this.$attrs.id}`;
      return banco.child(url).update(obj)
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