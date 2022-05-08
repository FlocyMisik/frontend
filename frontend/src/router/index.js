import Vue from 'vue'
import LoginViewVue from '@/views/LoginView.vue'
import VueRouter from 'vue-router'
import TemplateView from "../views/TemplateView.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginViewVue
  },

  {
    path: '/home',
    name: 'TemplateView',
    component: TemplateView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/DashBoard.vue'),
  },
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
