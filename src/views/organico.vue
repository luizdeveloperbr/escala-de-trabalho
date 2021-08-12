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
                    type="text"
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
              <div class="field">
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Função"
                    v-model="funcao"
                  />
                </div>
              </div>
              <div class="field" style="width: 250px">
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
              <button class="button is-success" @click="addColab()">
                Salvar
              </button>
              <button class="button is-danger">Limpar</button>
            </div>
          </footer>
        </div>
      </div>
      <div class="column">
        <li v-for="c in banco">
          <ul>
            {{
              c.mat
            }}
            ||
            {{
              c.nome
            }}
            <button class="button" @click="rem(c['.key'])">[X]</button>
          </ul>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../db.js";

const setor = db.ref("setores");
export default {
  name: "organico",
  data: function () {
    return {
      banco: [],
      horario: [],
      modalActive: false,
      mat: "",
      nome: "",
      funcao: "",
      hora: "",
      setor: null,
      //id: this.$route.query.setor
    };
  },
  firebase: {
    horario: db.ref("horarios/master"),
  },
  computed: {
    id() {
      return this.$route.params.setor + "/organico";
      /* if (this.setor == null) {
        return (this.modalActive = true);
      }*/
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
      return db.ref("setores/" + this.$route.params.setor + "/organico").push({
        mat: this.mat,
        nome: this.nome,
        funcao: this.funcao,
        hora: this.hora,
        edit: false,
        domingos: this.week,
      });
      //.then(this.clearAdd());
    },
    rem(e) {
      return db
        .ref(`setores/${this.$route.params.setor}/organico`)
        .child(e)
        .remove();
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        this.$rtdbBind("banco", setor.child(id));
      },
    },
  },
};
</script>
