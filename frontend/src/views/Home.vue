<template>
<div class="main">
    <router-link to="/random-recipe">
      <Button>Random Recipe</Button>
    </router-link>
    <router-link to="/recipe-selector">
      <Button>Recipe Selector</Button>
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
}

</style>
