<template>
  <div id="app">
    <img id="logo" class="logo" alt="logo" src="./assets/logo.png">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Roboto, Calibri, Trebuchet;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

#logo {
  position: fixed; 
  top: 0;
  left: 0;
}

</style>
