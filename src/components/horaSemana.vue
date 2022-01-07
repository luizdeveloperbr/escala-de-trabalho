<template>
  <div class="">
    <!-- <h4>07:00</h4> -->
    <table class="table is-bordered mx-auto mt-3">
      <tr>
        <td
          colspan="4"
          class="py-0 has-background-dark has-text-white has-text-centered"
        >
          <p class="is-size-5">{{texto}}</p>
        </td>
      </tr>
      <tr v-for="colab in colabs">
        <td>{{ colab.mat }}</td>
        <td>{{ colab.nome }}</td>
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
