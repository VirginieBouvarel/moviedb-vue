import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MovieDetails',
    name: 'MovieDetails',
    component: () => import(/* webpackChunkName: "movie-details" */ '../views/MovieDetails.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
