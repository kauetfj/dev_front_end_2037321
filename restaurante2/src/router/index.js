import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/login.vue'
import ErroView from '../views/erro.vue'
import PesquisaView from '../views/pesquisa.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'erro',
    component: ErroView
  },

  {
    path: '/pesquisa',
    name: 'pesquisa',
    component: PesquisaView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
