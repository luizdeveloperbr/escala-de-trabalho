<template>
  <div class="content mx-6">
    <!-- <h4>07:00</h4> -->
    <table class="table is-bordered is-fullwidth mt-3">
      <tr>
        <td
          colspan="5"
          class=" has-background-dark has-text-white has-text-centered"
        >
          <p class="is-size-5"> <span class="has-text-weight-bold">Horario:</span> {{texto}}</p>
        </td>
      </tr>
      <tr class="has-background-grey-light has-text-weight-bold" id="head">
        <td>MAT</td>
        <td>COLABORADOR</td>
        <td>FUNÇÃO</td>
        <td>FOLGA</td>
        <td>ASSINATURA</td>
      </tr>
      <tr v-for="colab in colabs" :key="colabs.indexOf(colab)">
        <td class="mat">{{ colab.mat }}</td>
        <td class="nome">{{ colab.nome }}</td>
        <td class="cargo">{{ colab.cargo }}</td>
        <td class="dia">{{ colab.dia | moment("ddd, DD/MMM") }}</td>
        <td style="width: 350px"></td>
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
<style scoped>
.mat{
  width: 100px
}
.nome{
  min-width: 350px;
}
#head>td{
  padding-top: 0%;
  padding-bottom: 0%;
}
</style>
