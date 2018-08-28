<template>
  <main>
    <h2>Math Structures</h2>
    <p v-if="!structures">Loading structures...</p>
    <ul v-else class="list">
      <Structure
        v-for="(structure, index) in structures"
        :key="index"
        :structure="structure"
      />
    </ul>
    <AddStructure :on-add="handleAdd"/>  
  </main>
</template>

<script>
import Structure from './Structure';
import AddStructure from './AddStructure.vue';
import api from '../../services/api';

export default {
  components: {
    Structure, AddStructure
  },

};
</script>

<style scoped>

ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

</style>
