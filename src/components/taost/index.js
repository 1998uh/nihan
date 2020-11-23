import ToastComponent from './toast.vue'
const Toast = {};
//注册Toast
Toast.install = function (Vue) {
    //生成一个vue的子类
    const ToastConstructor = Vue.extend(ToastComponent)
  
    const instance = new ToastConstructor();
   
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
      
    Vue.prototype.$toast = (msg, duration = 2000) => {       
        instance.message = msg;
        instance.show = true;
        setTimeout(() => {
            instance.show = false;
        }, duration);
    }
   
    
}
export default Toast