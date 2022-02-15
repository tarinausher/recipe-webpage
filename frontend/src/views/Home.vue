<template>
<div class="main">
    <h2>Welcome!</h2>
    <p>What would you like today?</p>
    <router-link to="/recipe-selector">
      <Button>Select a Recipe Based on Ingredients</Button>
    </router-link>
    <router-link to="/random-recipe">
      <Button>Random Recipe</Button>
    </router-link>

  </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
  name: 'Home',
  components: {
    Button
  }
}
</script>

<style scoped>
.main {
  text-align: center;
  padding: 3em;
}



</style>
