import Vue from 'vue'

import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Store from '../components/Store.vue'
import Prueba from '../components/Prueba.vue'
import DinamicoAPI from '../components/DinamicoAPI.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'Home', component: Home },

    {path: '/api', name: 'DinamicoAPI', component: DinamicoAPI},

    {path: '/store', name: 'Store', component: Store},

    {path: '/prueba', name: 'Prueba', component: Prueba},
    
    {path: '/facebook',
        redirect: () => {
          window.location.href = 'http://www.facebook.com'
          return '/redireccionando_a_facebook'
        }
    },
    
    {path: '/twitter',
        redirect: () => {
          window.location.href = 'http://www.twitter.com'
          return '/redireccionando_a_teitter'
        }
    },
    
    {path: '/instagram',
        redirect: () => {
          window.location.href = 'http://www.instagram.com'
          return '/redireccionando_a_instagram'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router