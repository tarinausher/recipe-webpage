<template>
  <div id="app">
    <NavBar/>

    <router-view />
  </div>
</template>

<script>
import NavBar from '@/views/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@font-face {
  font-family: "Meow Script";
  src: local("Meow Script"),
    url(./fonts/Meow_Script/MeowScript-Regular.ttf) format("truetype");
}

* {
  font-family: "Calibri", Trebuchet;
  color: #183a1d;
  margin: 0;
  padding: 0;
  text-decoration: none;
  background-color: #fefbe9;
}

</style>
