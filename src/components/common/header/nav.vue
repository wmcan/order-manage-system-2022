<template>
    <div class="m-nav">
        <ul class="nav">
            <li class="list">
                <router-link :to="{ path: '/' }">首页</router-link>
            </li>
            <li class="list my">
                <router-link :to="{ path: '/' }">我的</router-link>
                <dl>
                    <dd>
                        <router-link :to="{ path: '/shop' }">我的购物车</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{ path: '/order' }">我的订单</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{ path: '/' }">我的收藏</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{ path: '/' }">账户设置</router-link>
                    </dd>
                </dl>
            </li>
            <li class="list">
                <router-link :to="{ path: '/' }">手机APP</router-link>
            </li>
            <li class="list bd">
                <router-link :to="{ path:  '/' }">商家中心</router-link>
                <dl>
                    <dd>
                        <router-link :to="{ path: '/login' }">登录商家中心</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{ path: '/' }">智能收银</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{ path: '/' }">我想合作</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{ path: '/' }">账户设置</router-link>
                    </dd>
                </dl>
            </li>
            <li class="list site">
                <router-link :to="{ path: '/' }">网站导航</router-link>
                <div class="subContainer">
                    <dl class="hotel">
                        <dt>酒店旅游</dt>
                        <dd>
                            <router-link :to="{ path: '/' }">我的订单</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{ path: '/' }">我的收藏</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{ path: '/' }">账户设置</router-link>
                        </dd>
                    </dl>
                    <dl class="food">
                        <dt>吃美食</dt>
                        <dd>
                            <router-link :to="{ path: '/' }">我的订单</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{ path: '/' }">我的收藏</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{ path: '/' }">抵用券</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{ path: '/' }">账户设置</router-link>
                        </dd>
                    </dl>
                    <dl class="movie">
                        <dt>看电影</dt>
                        <dd>
                            <router-link :to="{ path: '/' }">我的订单</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{ path: '/' }">我的收藏</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{ path: '/' }">抵用券</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{ path: '/' }">账户设置</router-link>
                        </dd>
                    </dl>
                    <dl class="app">
                        <dt>手机应用</dt>
                        <dd>
                            <img
                                class="appicon"
                                src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                                title="app"
                                alt="app"
                            />
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
