import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Player from '../views/Player.vue'
import SongList from '../views/SongList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/player',
    name: 'Player',
    component: Player
  },
  {
    path: '/songlist',
    name: 'SongList',
    component: SongList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
