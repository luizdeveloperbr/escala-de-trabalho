<!-- timeEntrance -->
<template>
  <fieldset :disabled="allow">
    <div class="field has-addons">
      <div class="select is-small">
        <select
          v-bind:value="value"
          class="is-focused"
          v-on:input="$emit('input', $event.target.value)"
          v-model="ipt"
        >
          <option v-for="h in list" :value="h">{{ h }}</option>
        </select>
      </div>

      <div class="control">
        <button class="button is-small" @click="rem">[X]</button>
      </div>
    </div>
  </fieldset>
</template>
<script>
export default {
  name: 'time-entrance',
  props: ['value', 'getValue', 'allow'],
  data() {
    return {
      ipt: this.getValue,
      list: ['manhã', 'tarde'],
    };
  },
  methods: {
    rem() {
      this.ipt = '';
      this.$emit('input', '');
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
