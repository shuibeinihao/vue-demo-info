import Vue from 'vue'
import Router from 'vue-router'
import Flowers from 'pages/Flowers'
import Flowersdetails from 'pages/flowersdetails'
import Flowerslist from 'pages/flowerslist'
import Flowerssport from 'pages/flowerssport'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      component: Flowers,
    },
    {
      path: '/flowerslist',
      component: Flowerslist,
    },
    {
      path: '/flowersdetails',
      component: Flowersdetails,
    },
    {
      path: '/Flowers',
      component: Flowers,
      children: [
	      {
	          path: '/flowerssport',
		      component: Flowerssport
	      }
    	]
    },

  ]
})
