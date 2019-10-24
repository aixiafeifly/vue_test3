import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const home=()=>import('@/view/home/home.vue')
const category=()=>import('@/view/category/category.vue')
const car=()=>import('@/view/car/car.vue')
const profile=()=>import('@/view/profile/profile.vue')
const user=()=>import('@/view/user/user.vue')


const routes=[
  { path: '/', redirect: '/home',},
  { path: '/home',name:'home', component:home},
  { path: '/category',name:'category', component:category},
  { path: '/car',name:'car',component:car },
  { path: '/profile',name:'profile', component:profile},
  { path: './user', component: user }
]

const router = new VueRouter({
  mode:'history',
  routes
})
export default router