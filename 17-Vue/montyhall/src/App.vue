<template>
  <div id="app">
    <h1>Problema de MontyHall</h1>
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantas portas: </label>
        <input
          type="text"
          id="portsAmount"
          size="3"
          v-model.number="portsAmount"
        />
      </div>
      <div v-if="!started">
        <label for="selectedPort">Qual porta é a premiada: </label>
        <input
          type="text"
          id="selectedPort"
          size="3"
          v-model.number="selectedPort"
        />
      </div>
      <button v-if="!started" @click="started = true">Iniciar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i">
        <Door :hasGift="i === selectedPort" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>
import Door from "./components/Door";

export default {
  name: "App",
  components: {
    Door,
  },
  data: function () {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: null,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(71, 9, 121, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );

  max-width: 100vw;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Changa', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
}

#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin: 20px 0px 60px 0px;
}

button {
  padding: 5px;
  background-color: rgb(63, 2, 63);
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;

  transition: background-color 0.2s;
}

button:hover {
  background-color: rgb(100, 2, 100);
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form input {
  border-radius: 2px;
  border: none;
  padding: 6px;
  height: 32px;
  font-size: 1.6rem;
}

.form,
.form button {
  margin: 10px 0px;
  font-size: 2rem;
}

.doors {
  
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

}
</style>
