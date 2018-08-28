<template>
  <section>

    <form @submit.prevent="handleSubmit">
      <div class="form">
        <p>Name:</p>
        <div class="form-input">
          <input v-model="name" placeholder="favorite tv shows" required>
        </div>
        
        <p>Type:</p>
        <div class="form-input">
          <select v-model="type" required>
            <option disabled value="">Please select one</option>
            <option value="set">Set</option>
            <option value="vector space">Vector Space</option>
            <option value="graph">Graph</option>
          </select>
        </div>

        <p>Ordered:</p>
        <div class="form-input">
          <input type="radio" name="ordered" id="true" value="true" v-model="ordered">
          <label for="true">True</label>
          <input type="radio" name="ordered" id="false" value="false" v-model="ordered">
          <label for="false">False</label>
        </div>

        <p>Number of Elements:</p>
        <div class="form-input">
          <input v-model="elements" type="number" placeholder="4" required>
        </div>

        <p>Properties:</p>
        <div id='properties-form' class="form-input">
          <input type="checkbox" id="associative" value="associative" v-model="properties">
          <label for="associative">Associative</label>
          <input type="checkbox" id="commutative" value="commutative" v-model="properties">
          <label for="commutative">Commutative</label>
          <input type="checkbox" id="transitive" value="transitive" v-model="properties">
          <label for="transitive">Transitive</label>
          <br>
        </div>

      </div>

      <button type="submit">Add</button>
      <button type="reset">Reset</button>
    </form>

    <div class="selections">
      <p>Properties: {{ checkedNames }}</p>

    </div>
  </section>
</template>

<script>
export default {

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
