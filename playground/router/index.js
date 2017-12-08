import Router from 'vue-router'
import Simple from '@/components/simple'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'simple',
      component: Simple
    }
  ]
})
