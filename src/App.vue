<script>
import '../node_modules/bulma/css/bulma.css';

export default {
  name: 'App',
  data() {
    return {
      texto: 'App',
    };
  },
};
</script>

<template>
<div class="wrap">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Setores
                    </a>

                    <div class="navbar-dropdown">
                        <router-link
                        class="navbar-item"
                        :to="{name:'Mensal',params:{setor:'cpd',mes:'junho'}}">
                        CPD
                        </router-link>
                        <router-link
                        class="navbar-item"
                        :to="{name:'Mensal',params:{mes:'agosto'}}">
                        Agosto
                        </router-link>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <h1>{{texto}}</h1>
    <router-view></router-view>
</div>
</template>
