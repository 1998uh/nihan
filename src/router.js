import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const GoodList = ()=>import('@/views/good/List.vue')
const GoodAdd = ()=>import('@/views/good/Add.vue')
const Home = ()=>import('@/views/home/Home.vue')
const Ad = ()=>import('@/views/home/Ad.vue') 
const router = new VueRouter({
    mode: 'hash', 
    routes: [
      {
        id: 31,
        title:'首页管理',
        path: '/',
        component: Home,
        icon: 'el-icon-location'
      },
      {
        id: 32,
        title: '广告管理',
        path: '/home/ad',
        component: Ad,
        icon: 'el-icon-location'
      },
      {
        id: 11,
        title:'商品列表',
        path: '/good/list',
        component: GoodList,
        icon: 'el-icon-location'
      },
      {
        id: 12,
        title:'商品新增',
        path: '/good/add',
        component: GoodAdd,
        icon: 'el-icon-location'
      }
   
    ]
  })
  export default router