import Vue from 'vue'
import Router from 'vue-router'

// Store
import store from '../store'

// Containers
import Full from '@/containers/Full'

// Views
import Landing from '@/views/Landing'
import Dashboard from '@/views/Dashboard'
import Results from '@/views/Results'
import Visual from '@/views/Visual'
// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)

const redirectLogout = (to, from, next) => {
  store.dispatch('auth/logout')
    .then(() => next('/pages/login'))
}

const router = new Router({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/Landing',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'landing',
          name: 'Toolkit',
          component: Landing,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'results',
          name: 'Results',
          component: Results,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'visual',
          name: 'Visual',
          component: Visual,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login,
          meta: {
            requiresUnauth: true
          }
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path: '/logout',
      beforeEnter: redirectLogout
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('auth/initialize')
      .then(() => {
        if (!store.getters['auth/isAuthenticated']) {
          next('/pages/login')
        } else {
          next()
        }
      })
  } else if (to.matched.some(record => record.meta.requiresUnauth)) {
    store.dispatch('auth/initialize')
      .then(() => {
        if (store.getters['auth/isAuthenticated']) {
          next('/pages/dashboard')
        } else {
          next()
        }
      })
  } else {
    next() // make sure to always call next()!
  }
})

export default router
