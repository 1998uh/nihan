const GoodList = ()=>import('@/views/good/List.vue')
const GoodAdd = ()=>import('@/views/good/Add.vue')
const OrderList = ()=>import('./order/List.vue')
const Echarts = ()=>import('@/views/good/Echarts.vue')
const Home = ()=>import('@/views/home/Home.vue')
const Ad = ()=>import('@/views/home/Ad.vue')
const TestStudy = ()=>import('@/views/home/TestStudy.vue')

const routes = [
  {
    id: 3,
    title: '概况管理',
    icon: 'el-icon-menu',
    children: [
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
        id: 33,
        title: '练习',
        path: '/home/TestStudy',
        component: TestStudy,
        icon: 'el-icon-location'
      }
     
    ]
  },
  {
    id: 1,
    title: '商品管理',
    icon: 'el-icon-menu',
    children: [
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
      },
      {
        id: 44,
        title:'echarts',
        path: '/good/Echarts',
        component: Echarts,
        icon: 'el-icon-location'
      }
    ]
  },
  {
    id: 2,
    title: '订单管理',
    icon: 'el-icon-menu',
    children: [
      {
        id: 21,
        title: '订单列表',
        path: '/order/list',
        component: OrderList,
        icon: 'el-icon-eleme'
      }
    ]
  }
]

export default routes
