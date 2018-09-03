<template>
  <main>
    <h2>Name: {{ name }}</h2>
    <p>type: {{ type }}</p>
    <p>ordered: {{ ordered }}</p>
    <p>elements: {{ elements }}</p>
  </main>
</template>

<script>
import api from '../../services/api';


export default {  

  data() {
    return {
      name: null,
      type: null,
      ordered: null,
      elements: null
    };
  },
  created() {
    this.findStructure();
  },
  methods: {
    findStructure() {
      this.loading = true;
      this.error = null;

      api.getStructure(this.$route.params.key)
        .then(response => {
          this.key = response.key;
          this.name = response.name;
          this.type = response.type;
          this.ordered = response.ordered;
          this.elements = response.elements;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    },
  },
};
</script>

<style>

</style>
