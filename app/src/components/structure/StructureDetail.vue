<template>
  <main>
    <p>I'm a detail view!</p>
    <p>name is {{ name }}</p>
  </main>
</template>

<script>
import api from '../../services/api';


export default {  

  data() {
    return {
      name: null,
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
          this.name = response.name;
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
