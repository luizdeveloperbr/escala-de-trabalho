<!-- timeEntrance -->
<template>
  <fieldset :disabled="allow">
    <div class="field has-addons">
      <div class="select is-small">
        <select
          class="is-focused"
          @change="updateHora"
          v-model="ipt"
        >
          <option v-for="h in list" :key="list.indexOf(h.hora)">{{ h.hora }}</option>
        </select>
      </div>

      <div class="control">
        <button class="button is-small" @click="rem">[X]</button>
      </div>
    </div>
  </fieldset>
</template>
<script>
import {db} from '../db'
const banco = db.ref('setores')
export default {
  name: 'horario',
  props: ['value', 'getValue', 'allow'],
  firebase:{
    list: db.ref('horarios/master')
  },
  data() {
    return {
      list: [],
      ipt: '',
    };
  },
  methods: {
    rem() {
      this.ipt = '';
      this.$emit('input', '');
    },
    updateHora() {
      var obj = {hora: this.ipt}
      var url = this.$route.params.setor + '/organico/' + this.getValue + "/domingos/" + this.$attrs.id;
      console.log(url + '-' + obj.hora)
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
