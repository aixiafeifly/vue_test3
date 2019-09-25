import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
  path: '/',
  name: 'login',
  component: () => import('@/views/login/login')
}]
const router = new Router({
  mode: 'history',
  routes
})

export default router
