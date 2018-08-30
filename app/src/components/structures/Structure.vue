<template>
  <li
    @click="handleClick" 
    :style="{ backgroundColor: structure.color }"
  >
      <h3>{{ structure.name }}</h3>
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
  cursor: pointer;
  border: 1px solid black;
}

</style>
