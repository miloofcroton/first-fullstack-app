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

        <p>Color:</p>
        <div id='color-form' class="form-input">
          <input v-model="structure.color" type="color" placeholder="#0c8d53" required>
        </div>

      </div>

      <button type="submit">Add</button>
      <button type="reset">Reset</button>
    </form>

    <div class="selections">
      <h4>You've selected:</h4>
      <div>
        <p class="col-1">Name:</p>
        <p class="col-2">{{ structure.name }}</p>
        <p class="col-1">Color:</p>
        <p class="col-2" 
          style="min-width: 100px; min-height: 50px; border: 1px solid black;" 
          :style="{ backgroundColor: structure.color }">
        </p>
        <p class="col-1">Type:</p>
        <p class="col-2">{{ structure.type }}</p>
        <p class="col-1">Ordered:</p>
        <p class="col-2">{{ structure.ordered }}</p>
        <p class="col-1">Number of elements:</p>
        <p class="col-2">{{ structure.elements }}</p>
        <p class="col-1">Properties:</p>
        <p class="col-2">{{ structure.properties }}</p>
      </div>

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
    properties: [],
    color: '#0c8d53',
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
}
.col-2 {
  justify-self: start;
}

</style>
