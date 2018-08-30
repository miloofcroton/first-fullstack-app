<template>
  <main>
    
    <h2>Math Structures</h2>
    
    <div class="primary">
      <div class="add-structures">
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
            :selected="selected"
            :onSelect="handleSelect"
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
      structures: null,
      selected: null
    };
  },
  created() {
    api.getStructures()
      .then(structures => {
        this.structures = structures;
      });
  },
  methods: {
    handleSelect(structure) {
      this.selected = structure;
    },
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
  grid-template-columns: 40% auto;
}

ul.list {
  margin: 0px 25px;

  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px;
}


</style>
