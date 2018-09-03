<template id="city-template">
  <div v-if="city">
    <article v-if="!editing">
      <h3>{{ city.name }}</h3>
      <p v-if="state">State: {{ state.name }} ({{ state.abbrev }})</p>
      <p class="population">
        Current population: 
        <strong>{{ population }}</strong> 
      </p>
      <p>Landlocked: {{ city.landlocked }}</p>
      <p class="population">
        <span class="size">(a <em>{{ size }}</em> city)</span>
      </p>
      <p>
        <button @click="handleRemove">remove this city</button>
      </p>
    </article>
    <CityForm 
      v-else 
      label="Update"
      :city="city"
      :states="states"
      :onEdit="handleUpdate"
    />
    <button @click="editing = !editing">{{ editing ? 'Cancel' : '✏️' }}</button>
  </div>
</template>

<script>
import CityForm from './CityForm';
import api from '../../services/api';

export default {
  props: {
    states: Array
  },
  data() {
    return {
      city: null,
      editing: false
    };
  },
  components: {
    CityForm
  },
  created() {
    api.getCity(this.$route.params.id)
      .then(city => {
        this.city = city;
      });
  },
  computed: {
    state() {
      if(!this.city || !this.states) {
        return null;
      }

      const { stateId } = this.city;
      return this.states.find(s => s.id === stateId);
    },
    population() {
      return this.city.population.toLocaleString();
    },
    size() {
      return this.city.population > 600000 ? 'big' : 'small';
    }
  },
  methods: {
    handleRemove() {
      if(!confirm(`Are you sure you want to remove ${this.city.name}?`)) {
        return;
      }

      return api.removeCity(this.city.id)
        .then(() => {
          this.$router.push('/cities');
        });
    },
    handleUpdate(toUpdate) {
      return api.updateCity(toUpdate)
        .then(updated => {
          this.city = updated;
          this.editing = false;
        });
    }
  }
};
</script>

<style scoped>

li {
  width: 250px;
  height: 250px;
  cursor: pointer;
  border: 1px solid black;
  justify-self: center;
}

</style>
