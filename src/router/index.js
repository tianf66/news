import Vue from 'vue'
import Router from 'vue-router'
import Channel from '@/components/views/Channel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Channel',
      component: Channel
    }
  ]
})
