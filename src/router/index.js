import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Login' },
    meta: {
      hideForAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  let user = JSON.parse(sessionStorage.getItem('user'));
  let authRequired = to.matched.some(record => record.meta.requiresAuth);
  if (!user.id && authRequired) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else if (user.id && !authRequired) {
    next({
      path: '/home',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}) */

export default router
