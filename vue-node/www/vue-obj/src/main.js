import Vue from 'vue';
import App from './App.vue';
// import Vuex from 'vuex'
// 交互axios
import axios from 'axios'
// axios.defaults.withCredentials=true

//配置拦截器
axios.interceptors.request.use( function (config) {
    //在请成功之前做点事
    store.dispatch('showloading');
    return config;  //返回现在配置给拦截器 一定要返回
}, function (error) {
    // 请求错误之前 做点事
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // 在响应之后做点事
    store.dispatch('hideloading')
    return response; // 现在回来的数据对象
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

Vue.prototype.axios = axios

//引入loading
import loading from './loading'
Vue.use(loading)

//引入状态管理
import store from './store'

//动画
import 'animate.css'
//全局引入router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
 import routers from './router/router.config'
 const router = new VueRouter(routers)
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store

})
