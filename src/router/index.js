import Vue from 'vue'
import Router from 'vue-router'
import { HelloWorld, Toy, Father }from '@/components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
