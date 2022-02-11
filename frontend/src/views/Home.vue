<template>
<div class="main">
    <Button msg="Random Recipe"/>
    <Button msg="Recipe Selector"/>
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

.main h2 {
  font-size: 36px;
  color: #183a1d;

}






</style>
