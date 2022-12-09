import Vue from 'vue'
import VueRouter from 'vue-router'
import RegionalView from '../views/RegionalView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/regional',
    name: 'regional',
    component: RegionalView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
