import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home/Home'
import Search from '../containers/Search/Search'
import DetailStore from '../containers/DetailStore/DetailStore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/detailstore/:id',
      name: 'DetailStore',
      component: DetailStore
    },

  ]
})
