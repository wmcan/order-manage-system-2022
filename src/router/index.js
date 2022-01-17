import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/goodsManage',
                    component: () => import(/* webpackChunkName: "goodsManage" */ '../components/page/goodsManage.vue'),
                    meta: { title: '商品管理' }
                },
                {
                    path: '/orderManage',
                    component: () => import(/* webpackChunkName: "goodsManage" */ '../components/page/orderManage.vue'),
                    meta: { title: '订单管理' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        }
    ]
});
