import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/view',
      name: 'images-view',
      component: require('@/components/ImagesView').default,
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
