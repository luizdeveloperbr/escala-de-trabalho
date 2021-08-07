<!--folga.vue-->
<template>
<fieldset :disabled="allow">
  <div>
     <input
      type="date"
      v-model="nome"
      class="input is-size-7"
      @change="updateDia"
    />
  </div>
  </fieldset>
</template>
<script>
import moment from 'moment'
import {db} from '../db'
const banco = db.ref('setores')

export default {
  name: "folga",
  props: ["value", "getValue", "getReal"],
  //usar as funçães de mine max com v-bind no input
  data(){
   return {
     nome: this.getReal,
     allow: false,
     min:'',
     max:''
     }
  },
  created() {
    if (this.getValue !== 0){
      this.min = moment(this.getValue,'YYYY-MM-DD').subtract(1,'days').format('YYYY-MM-DD')
      this.max = moment(this.getValue,'YYYY-MM-DD').add(3,'days').format('YYYY-MM-DD')
      }
  },
    updated(){
    if (this.getValue !== 0){
      this.min = moment(this.getValue,'YYYY-MM-DD').subtract(1,'days').format('YYYY-MM-DD')
      this.max = moment(this.getValue,'YYYY-MM-DD').add(3,'days').format('YYYY-MM-DD')
      console.log("updated")
    }
  },
  methods:{
    updateDia() {
      var obj = {dia: this.nome}
      var url = this.$route.params.setor + '/organico/' + this.getValue + "/domingos/" + this.$attrs.id;
      console.log(url + '-' + obj.dia)
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