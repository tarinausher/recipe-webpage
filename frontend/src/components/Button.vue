<template>
    <div class="container">
      <button>{{ msg }}</button>
    </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 23vh;
}

button {
 width: 300px;
 height: 100px;
 border: none;
 color: #fefbe9;
 background-color: #f6c453;
 border-radius: 4px;
 box-shadow: inset 0 0 0 0 #f6c453;
 transition: ease-out 0.3s;
 font-size: 2rem;
 outline: none;
}

button:hover {
 box-shadow: inset 300px 0 0 0 #fefbe9;
 cursor: pointer;
 color: #f6c453;
}
</style>