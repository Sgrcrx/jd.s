import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//fa字体包
import './assets/css/font-awesome.css'

//bootstrap

import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'
Vue.use(uiv)
/**引入字体图标库**/
//import "./assets/css/font-awesome.min.css"
import "./assets/css/weui.css"


// 设置服务器地址
Vue.prototype.serveRoot = "http://192.168.255.113:8888";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
