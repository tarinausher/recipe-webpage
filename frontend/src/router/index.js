import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RandomRecipe from '../views/RandomRecipe.vue'
import RecipeSelector from '../views/RecipeSelector.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/random-recipe',
        name: 'random-recipe',
        component: RandomRecipe
    },
    {
      path: '/recipe-selector',
      name: 'recipe-selector',
      component: RecipeSelector
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router;