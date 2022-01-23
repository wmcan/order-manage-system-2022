import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'default',
            component: () => import(/* webpackChunkName: "dashboard" */ '../components/common/layout/default.vue'),
            redirect: '/frontDestIndex',
            children: [
                {
                    path: 's/:name',
                    name: 'goods',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../page/goodsList.vue')
                },
                {
                    path: '/frontDestIndex',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../page/frontDestIndex/index.vue'),
                    meta: { title: '点餐首页' }
                },
                {
                    path: '/changeCity',
                    name: 'changeCity',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../page/changeCity.vue')
                },
                {
                    path: '/myList',
                    name: 'myList',
                    component: () => import('../page/myList.vue')
                }
            ]
        },
        //其他一些页面，包括我的订单，购物，等
        {
            path: '/other',
            name: 'other',
            component: () => import(/* webpackChunkName: "dashboard" */ '../components/common/layout/other.vue'),
            redirect: '/frontDestIndex',
            children: [
                {
                    path: '/shop',
                    name: 'shop',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../page/shopping.vue')
                },
                {
                    path: '/order',
                    name: 'order',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../page/order.vue')
                }
            ]
        },
        {
            path: '/blank',
            name: 'blank',
            component: () => import(/* webpackChunkName: "dashboard" */ '../components/common/layout/blank.vue'),
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../page/frontDestIndex/login.vue')
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../page/frontDestIndex/register.vue')
                }
            ]
        },
        {
            path: '/dashboard',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            // meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/goodsManage',
                    component: () => import(/* webpackChunkName: "goodsManage" */ '../page/goodsManage.vue'),
                    meta: { title: '商品管理' }
                },
                {
                    path: '/orderManage',
                    component: () => import(/* webpackChunkName: "goodsManage" */ '../page/orderManage.vue'),
                    meta: { title: '订单管理' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../page/Login.vue'),
            meta: { title: '登录' }
        }
    ]
});
