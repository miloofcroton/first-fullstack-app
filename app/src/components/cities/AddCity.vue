<template>
<section>
  <h2>Add a new city</h2>
  <CityForm 
    label="Add"
    :states="states"
    :onEdit="handleAdd"/>
</section>
</template>

<script>
import CityForm from './CityForm.vue';
import api from '../../services/api';

export default {
  components: { 
    CityForm 
  },
  props: {
    states: Array
  },
  methods: {
    handleAdd(city) {
      return api.addCity(city)
        .then(added => {
          this.$router.push(`/cities/${added.id}`);
        });
    }
  }
};

</script>

<style>

</style>
