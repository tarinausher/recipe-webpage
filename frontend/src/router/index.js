import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import RandomRecipe from '@/views/RandomRecipe.vue'
import RecipeSelector from '@/views/RecipeSelector.vue'
import Login from '@/views/Login.vue'
import Contact from '@/views/Contact.vue'
import SavedRecipes from '@/views/SavedRecipes'

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/saved-recipes',
      name: 'saved-recipes',
      component: SavedRecipes
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router;