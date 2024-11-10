import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Groups from '../views/Groups.vue'
import Map from '../views/Map.vue'
import Resources from '../views/Resources.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/groups',
      name: 'groups',
      component: Groups
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    }
  ]
})

export default router