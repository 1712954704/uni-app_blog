// router.js
import {
	RouterMount,
	createRouter
} from 'uni-simple-router';

const router = createRouter({
	platform: '',
	keepUniOriginNav: false,
	debugger: false,
	routerBeforeEach: (to, from, next) => {
		next()
	},
	routerAfterEach: (to, from) => {},
	routerErrorEach: (error, router) => {
		err(error, router, true)
	},
	detectBeforeLock: (router, to, navType) => {},
	resolveQuery: (jsonQuery) => jsonQuery,
	parseQuery: (jsonQuery) => jsonQuery,
	h5: {
		paramsToQuery: false,
		vueRouterDev: true,    //完全使用vue-router开发 默认 false  
		vueNext: false,
		mode: 'hash',
		base: '/',
		linkActiveClass: 'router-link-active',
		linkExactActiveClass: 'router-link-exact-active',
		scrollBehavior: (to, from, savedPostion) => ({
			x: 0,
			y: 0
		}),
		fallback: true
	},
	APP: {
		loddingPageStyle: () => JSON.parse('{"backgroundColor":"#FFF"}'),
		loddingPageHook: (view) => {
			view.show();
		},
		launchedHook: () => {
			plus.navigator.closeSplashscreen();
		},
		animation: {
			animationType: 'pop-in',
			animationDuration: 300
		}
	},
	routes: [
		{
			path: '/',
			name: '/pages/index/index',
			component:()=>import('@/pages/index/index'),
		},
		{
		  //这时的path的必须和pages.json中的配置相同
		  path: '/pages/tabBar/component/component',
		  name:'index',
		  extra:{
			pageStyle:{
			  color:'#f00'
			  //...... 更多自定义参数
			}
		  }
		},
		{
			path: '*',
			redirect: (to) => {
				return {
					name: '404'
				}
			}
		}, 
	]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log(to);
	console.log('跳转结束');
})

export {
	router,
	RouterMount
}
