<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/window/Header.vue';
import Footer from './components/window/Footer.vue';

export default {
  name: 'app',
  components: {
    Header, Footer
  }
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
