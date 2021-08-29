<template>
  <div class="home">
    <div class="columns">
      <div class="column">
        <div class="card">
          <header class="card-header">
            <div class="card-header-title">
              <p>Novo Colaborador</p>
            </div>
          </header>
          <div class="card-content">
            <section>
              <div class="field">
                <div class="control">
                  <input
                    type="number"
                    class="input"
                    placeholder="Matricula"
                    v-model="mat"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Nome do Colaborador"
                    v-model="nome"
                  />
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <a class="button is-static">Função</a>
                </div>
                <div class="control">
                  <div class="select">
                    <select class="select" v-model="funcao">
                      <option v-for="f in fun" :value="f">{{ f.cargo }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons" style="width: 250px">
                <div class="control">
                  <a class="button is-static">Horario Semanal</a>
                </div>
                <div class="control">
                  <div class="select">
                    <select v-model="hora">
                      <option v-for="h in horario" :value="h.cod">
                        {{ h.hora }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer class="card-footer">
            <div class="buttons card-footer-item">
              <button class="button is-primary" @click="addColab()">
                Salvar
              </button>
              <button class="button" @click="clearAdd">Limpar</button>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <table class="table is-fullwidth">
            <thead>
              <th>Matricula</th>
              <th>Nome</th>
              <th>Função</th>
              <th>Status</th>
              <th>Excluir</th>
            </thead>
            <tbody>
              <tr v-for="c in banco">
                <td>{{ c.mat }}</td>
                <td>{{ c.nome }}</td>
                <td>{{ c.funcao.cargo }}</td>
                <td><status :get-real="c['.key']"></status></td>
                <td>
                  <button
                    class="delete is-medium"
                    @click="confirm = c['.key'];modal = true"
                  ></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="modal" :class="{ 'is-active': modal }">
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="message">
            <div class="message-header">
              <h2>Confirmar Exclusão</h2>
            </div>
            <div class="message-body">
              <div class="block">
              <h2>Deseja Excluir o Colaborador?</h2>
              </div>
              <div class="buttons is-centered">
                <button class="button is-success" @click="rem(confirm);modal = false">Sim</button>
                <button class="button is-danger" @click="modal = false">Não</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { db } from "../db.js";
import status from "../components/status.vue";

const setor = db.ref("setores");
export default {
  name: "organico",
  data: function () {
    return {
      banco: [],
      horario: [],
      mat: "",
      modal: false,
      confirm:"",
      nome: "",
      funcao: "",
      fun: [],
      hora: "",
      status: 0,
      setor: null,
    };
  },
  firebase: {
    horario: db.ref("horarios/semana"),
  },
  computed: {
    id() {
      return this.$route.params.setor + "/organico";
    },
    func() {
      return this.$route.params.setor + "/funcoes";
    },
    week: function () {
      var weeks = [];
      var i = weeks.length;
      while (i < 54) {
        weeks.push({ id: i++, dia: "", hora: "" });
      }
      return weeks;
    },
  },
  methods: {
    addColab() {
      return db
        .ref("setores/" + this.$route.params.setor + "/organico")
        .push({
          mat: this.mat,
          nome: this.nome,
          funcao: this.funcao,
          hora: this.hora,
          edit: false,
          status: this.status,
          domingos: this.week,
        })
        .then(this.clearAdd());
    },
    clearAdd() {
      this.mat = null;
      this.nome = null;
      this.funcao = null;
      this.hora = null;

      return console.log("limpo");
    },
    rem(e) {
      this.modal = true
 return db
        .ref(`setores/${this.$route.params.setor}/organico`)
        .child(e)
        .remove()
  }
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        this.$rtdbBind("banco", setor.child(id));
      },
    },
    func: {
      immediate: true,
      handler(func) {
        this.$rtdbBind("fun", setor.child(func));
      },
    },
  },
  components: {
    status,
  },
};
</script>
<style>
button.delete:hover
{
background:red
}
</style>