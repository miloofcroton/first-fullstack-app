<template>
  <li
    @click="handleClick" 
    :style="{ backgroundColor: structure.color }"
  >
      <h4>{{ structure.name }}</h4>
      <p>Type: {{ structure.type }}</p>
      <p>Ordered: {{ structure.ordered }}</p>
      <p>Number of Elements: {{ structure.elements }}</p>
      <router-link :to="`/structure/${structure.id}`">See Full Structure</router-link>
  </li>
</template>

<script>
export default {
  props: {
    structure: Object,
    selected: Object,
    onSelect: Function
  },
  methods: {
    handleClick() {
      this.onSelect(this.structure.key);
    }
  },

};
</script>

<style scoped>

li {
  width: 250px;
  height: 250px;
  cursor: pointer;
  border: 1px solid black;
}

</style>
