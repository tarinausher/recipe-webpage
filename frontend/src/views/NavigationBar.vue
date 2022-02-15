<template>
<div id="header" class="container">
    <div id="logo" >
        <router-link to="/">
            <h1>Kitchen Companion</h1>
        </router-link>
    </div>

    <div id="nav" class="nav">
    
        <router-link to="/contact">
            <h2>Contact</h2>
        </router-link>
        
        <router-link to="/saved-recipes">
            <h2>Saved Recipes</h2>
            <!-- if selected and not logged in should take to login -->
        </router-link>
    </div>

</div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>
#logo h1 {
  font-family: "Meow Script";
  font-size: 64px;
  color: #f0a04b;
  letter-spacing: 1px;
  display: flex;
}

#nav {
  display: flex;
  flex-direction: row;
  padding: 1.5em;
}

#nav h2 {
  padding-right: 1em;
}

#nav h2:hover {
    color: #f0a04b;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>