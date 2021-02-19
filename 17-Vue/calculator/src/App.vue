<template>
  <div class="app">
    <h1>Calculator</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from "../src/main/Calculator";

export default {
  name: "App",
  components: {
    Calculator,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  margin-bottom: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #abc;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));

  display: flex;
  flex-direction: column;
  height: 100vh;

  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
