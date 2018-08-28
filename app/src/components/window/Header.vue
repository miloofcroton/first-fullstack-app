<template>
    <header>
    <img alt="Mathy" src="../../assets/logo.png">
    
    <div>
      <h1>Math Structures R Fun</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/structures">Structures</router-link>
      </nav>
    </div>


  </header>
</template>

<script>
export default {

};
</script>

<style scoped>

img {
  width: 200px;
  height: 200px;
}

a {
  font-size: 24px;
  padding: 10px;
  margin: 15px;
  border: 1px solid black;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 0.5px black;
  background-color: #00b061

}

a:hover {
  background-color: #0c8d53;
  box-shadow: 1.5px 1.5px 1.5px black;
  transform: scale(1.5);
}

h1 {
  font-family: 'Monoton', cursive;
  font-size: 74px;
  font-weight: normal;
  margin: 5px;
  text-transform: uppercase;
}

nav {
  padding: 20px;
}

header {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  box-shadow: 3px 2px 2px black;

  background: #000000; /* Old browsers */
  background: -moz-linear-gradient(left, #000000 0%, #00b061 40%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #000000 0%,#00b061 40%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #000000 0%,#00b061 40%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#00b061',GradientType=1 );
}

</style>
