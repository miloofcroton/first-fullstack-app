<template>
  <section>
    <h2>What a sight these cities are to see</h2>
    <p v-if="!cities">Loading cities...</p>
    <ul v-else class="list">
      <li
        v-for="city in cities"
        :key="city.id">
        <router-link :to="`/cities/${city.id}`">
          {{city.name}}, {{city.state}}
        </router-link>
      </li>
    </ul>
    <p>
      <router-link to="/cities/add">Add a new city</router-link>
    </p>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      cities: null,
    };
  },
  created() {
    api.getCities()
      .then(cities => {
        this.cities = cities;
      });
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
