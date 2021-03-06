import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import MyProjects from '../views/MyProjects.vue'
import Team from '../views/Team.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'Projects',
    component: MyProjects
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
