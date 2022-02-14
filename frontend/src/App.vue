<template>
  <div id="app">
    <router-link to="/">
    <h1>Kitchen Companion</h1>
    </router-link>
    <Home />
    <router-view />
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@font-face {
  font-family: "Meow Script";
  src: local("Meow Script"),
    url(./fonts/Meow_Script/MeowScript-Regular.ttf) format("truetype");
}

/* @font-face {
  font-family: "Comforter Brush";
  src: local("Comforter Brush"),
    url(./fonts/Comforter_Brush/ComforterBrush-Regular.ttf) format("truetype");
} */

* {
  font-family: "Calibri", Trebuchet;
  color: #183a1d;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

/* #app {
  background-image: url(./assets/...);
  height: 100vh;
  background-size: cover;
  background-position: center;
} */

#app h1 {
  font-family: "Meow Script";
  font-size: 64px;
  color: #f0a04b;
  text-align: center;
  letter-spacing: 1px;
}




</style>
