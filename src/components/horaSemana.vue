<template>
  <div class="content mx-6">
    <!-- <h4>07:00</h4> -->
    <table class="table is-bordered is-fullwidth mt-3">
      <tr>
        <td
          colspan="5"
          class="py-0 has-background-dark has-text-white has-text-centered"
        >
          <p class="is-size-5">{{texto}}</p>
        </td>
      </tr>
      <tr v-for="colab in colabs" :key="colabs.indexOf(colab)">
        <td>{{ colab.mat }}</td>
        <td>{{ colab.nome }}</td>
        <td>{{ colab.cargo }}</td>
        <td>{{ colab.dia | moment("ddd, DD/MMM") }}</td>
        <td style="min-width: 150px"></td>
      </tr>
    </table>
  </div>
</template>
<script>

export default {
  name: "horaSemana",
  props: ["colabs","texto"],
  data() {
    return { hora: "" };
  },
};
</script>
