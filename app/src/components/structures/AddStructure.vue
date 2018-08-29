<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <div class="form">
        <p>Name:</p>
        <div class="form-input">
          <input v-model="structure.name" placeholder="favorite tv shows" required>
        </div>
        
        <p>Type:</p>
        <div class="form-input">
          <select v-model="structure.type" required>
            <option disabled value="">Please select one</option>
            <option value="set">Set</option>
            <option value="vector space">Vector Space</option>
            <option value="graph">Graph</option>
          </select>
        </div>

        <p>Ordered:</p>
        <div class="form-input">
          <input type="radio" name="ordered" id="true" value="true" v-model="structure.ordered">
          <label for="true">True</label>
          <input type="radio" name="ordered" id="false" value="false" v-model="structure.ordered">
          <label for="false">False</label>
        </div>

        <p>Number of Elements:</p>
        <div class="form-input">
          <input v-model="structure.elements" type="number" placeholder="4" required>
        </div>

        <p>Properties:</p>
        <div id='properties-form' class="form-input">
          <input type="checkbox" id="associative" value="associative" v-model="structure.properties">
          <label for="associative">Associative</label>
          <input type="checkbox" id="commutative" value="commutative" v-model="structure.properties">
          <label for="commutative">Commutative</label>
          <input type="checkbox" id="transitive" value="transitive" v-model="structure.properties">
          <label for="transitive">Transitive</label>
          <br>
        </div>

      </div>

      <button type="submit">Add</button>
      <button type="reset">Reset</button>
    </form>

    <div class="selections">
      <h4>You've selected:</h4>
      <p>Name: {{ structure.name }}</p>
      <p>Type: {{ structure.type }}</p>
      <p>Ordered: {{ structure.ordered }}</p>
      <p>Number of elements: {{ structure.elements }}</p>
      <p>Properties: {{ structure.properties }}</p>

    </div>
  </section>
</template>

<script>

const initStructure = () => {
  return {
    name: '',
    type: '',
    ordered: '',
    elements: '',
    properties: '',
  };
};

export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      structure: initStructure()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.structure)
        .then(() => {
          this.structure = initStructure();
        });
    }
  }


};
</script>

<style scoped>

div.form {
  width: 50%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: auto auto;
}

div.form p {
  justify-self: end;
  margin: 10px;
}
div.form .form-input {
  justify-self: start;
}


form {
  padding: 20px;  
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

</style>
