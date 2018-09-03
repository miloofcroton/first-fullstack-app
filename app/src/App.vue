<template>
  <div id="app">
    <Header/>
    <router-view :states="states"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/window/Header.vue';
import Footer from './components/window/Footer.vue';
import api from './services/api';

export default {
  name: 'app',
  components: {
    Header, Footer
  },
  data() {
    return {
      states: null
    };
  },
  created() {
    api.getStates()
      .then(states => {
        this.states = states;
      });
  },


};
</script>

<style>

#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
}

</style>
