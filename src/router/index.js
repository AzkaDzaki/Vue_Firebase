import Vue from 'vue'
import VueRouter from 'vue-router'
import UserCreate from '../components/UserCreate'
import UserEdit from '../components/UserEdit'
import UserList from '../components/UserList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'add',
    component: UserCreate
  },
  {
    path: '/list',
    name: 'list',
    component: UserList
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: UserEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
