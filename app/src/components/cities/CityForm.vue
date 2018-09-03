<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <h3>Add a City</h3>
      <div class="form">
        <p>Name:</p>
        <div class="form-input">
          <input v-model="edit.name" placeholder="Portlandia" required>
        </div>

        <p>State:</p>
        <div class="form-input">
          <select v-model.number="edit.stateId" required>
            <option disabled value="">Please select a state</option>
            <option
              v-for="state in states"
              :key="state.id"
              :value="state.id">
              {{state.name}} ({{state.abbrev}})
            </option>
          </select>
        </div>

        <p>Population:</p>
        <div class="form-input">
          <input
            v-model.number="edit.population" 
            type="number" 
            placeholder="4" 
            required
          >
        </div>

        <p>Landlocked:</p>
        <div class="form-input">
          <input type="radio" name="landlocked" id="true" value="true" v-model="edit.landlocked">
          <label for="true">True</label>
          <input type="radio" name="landlocked" id="false" value="false" v-model="edit.landlocked">
          <label for="false">False</label>
        </div>
      </div>

      <button type="submit">{{ label }}</button>
      <button type="reset">Reset</button>
    </form>

    {{ edit }}

  </section>
</template>

<script>

const initCity = () => {
  return {
    name: '',
    population: '',
    landlocked: '',
  };
};

export default {
  props: {
    city: Object,
    label: String,
    states: Array,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.city ? Object.assign({}, this.city) : initCity()
    };
  },
  computed: {
    editMode() {
      return !!this.city;
    }
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        .then(() => {
          this.edit = initCity();
        });
    },
  }


};
</script>

<style scoped>

form {
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
  box-shadow: 3px 1px 1px black;
}

div.form {
  width: 50%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: auto auto;
}

div.form p {
  align-self: center;
  justify-self: end;
  margin: 10px;
}
div.form .form-input {
  align-self: center;
  justify-self: start;
}

select {
  padding: 8px;
  border-radius: 8px;
  margin-right: 4px;
  cursor: pointer;
}

input {
  padding: 6px;
  border-radius: 6px;
}

button {
  padding: 6px;
  border-radius: 8px;
  margin-right: 4px;
  cursor: pointer;
  width: 60px;
}

button:hover {
  background: grey;
}

.selections {
  border-radius: 8px;
  border: 1px solid black;
  box-shadow: 3px 1px 1px black;
}

.selections div {
  margin: 5px auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 3px;
}

.selections div p {
  font-size: 18px;
}

.col-1 {
  justify-self: end;
  align-self: center;

}
.col-2 {
  justify-self: start;
  align-self: center;
}

</style>
