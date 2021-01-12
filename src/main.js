import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'


import './mock'
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(MyPlugin,{})
import Toast from './components/taost'
Vue.use(Toast)
import api from '@/utils/api'
Vue.prototype.$axios = api 
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
