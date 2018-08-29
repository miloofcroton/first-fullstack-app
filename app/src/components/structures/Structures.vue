<template>
  <main>
    
    <h2>Math Structures</h2>
    
    <div class="primary">
      <div class="add-structures">
        <h3>Add a Structure</h3>
        <AddStructure :on-add="handleAdd"/> 
      </div>
      <div class="list-structures">
        <h3>Structure List</h3>
        <p v-if="!structures">Loading structures...</p>
        <ul v-else class="list">
          <Structure
            v-for="(structure, index) in structures"
            :key="index"
            :structure="structure"
          />
        </ul>
      </div>
    </div>

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
  data() {
    return {
      structures: null
    };
  },
  created() {
    api.getStructures()
      .then(structures => {
        this.structures = structures;
      });
  },
  methods: {
    handleAdd(structure) {
      return api.addStructure(structure)
        .then(saved => {
          this.structures.push(saved);
        });
    }
  }

};
</script>

<style scoped>

h2 {
  margin: 50px auto;
  font-size: 42px;
}

.primary {
  display: grid;
  grid-template-columns: 30% auto;
}

ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}

li {
  border: 1px solid black;
}


</style>
