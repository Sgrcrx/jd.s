import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Cart from './views/Cart.vue'
import User from './views/User.vue'
import Search from './views/Search.vue'
import Category from './views/Category.vue'
import Productss from './views/Productss.vue'

import Goodes from './components/Goodes.vue'
import Comment from './components/Comment.vue'
import Detail from './components/Detail.vue'
import Recommend from './components/Recommend.vue'
import Routerss from './views/Routerss.vue'
import Ss from './views/Ss.vue'
import Ceshi from './views/Ceshi.vue'
//admincrx
import Admincrx from './views/Admincrx.vue'
import AdmincrxTop from './components/AdmincrxTop.vue'
import AdmincrxLeft from './components/AdmincrxLeft.vue'
import AdmincrxRight from './components/AdmincrxRight.vue'

//
import UserEle from './components/UserEle.vue'
import UserPay from './components/UserPay.vue'
import UserFoots from './components/UserFoots.vue'
import UserTools from './components/UserTools.vue'
import UserServe from './components/UserServe.vue'
import Groom from './components/Groom.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import( /* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/',
			name: 'home',
			component: Home
		},{
			path: '/ceshi',
			name: 'ceshi',
			component: Ceshi
		},
		{
			path: '/routerss',
			name: 'routerss',
			component: Routerss
		}, {
			path: '/admincrx',
			name: 'admincrx',
			component: Admincrx,
			children: [{
				path:'',
				components:{
				default:AdmincrxRight,
				header:AdmincrxTop,
				aside:AdmincrxLeft
				}
			}]
		},{
			path: '/ss',
			name: 'ss',
			component: Ss
		}, {
			path: '/Cart',
			name: 'cart',
			component: Cart
		}, {
			path: '/User',
			name: 'user',
			component: User
		}, {
			path: '/search',
			name: 'search',
			component: Search
		}, {
			path: '/category',
			name: 'category',
			component: Category
		}, {
			path: '/productss/:id',
			name: 'productss',
			component: Productss,
			children: [{
				path: 'goodes',
				component: Goodes
			}, {
				path: 'detail',
				component: Detail
			}, {
				path: 'comment',
				component: Comment
			}, {
				path: 'recommend',
				component: Recommend
			}]
		}
	]
})
router.beforeEach((to, from, next) => {
 	console.log(to);
 	console.log(from);
 	console.log(to.path);
 	//
   	if(to.path=='/user'){
   		next({path:'/'});
   	}else{
   		
   		next();
   	}
 	
// 	//
// 	if(to.path=='/user'){
//  	next({ path: '/' });
//  }else{
//  	next();
//  }
    //
 	
})

//
router.afterEach((to,from)=>{
	
})


export default router;
