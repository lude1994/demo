import Vue from 'vue'
import App from './App.vue'
import router from './router'           //这里引入router，可以使用在全局上
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'          //mint-ui样式css
import './assets/basic.css'             //基本样式
import "./assets/font/iconfont.css";    //字体图标

Vue.use(Mint);     //使用ui组件，vue的插件都要这样使用

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
