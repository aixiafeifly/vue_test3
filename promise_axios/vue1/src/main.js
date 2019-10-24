import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { request } from './api'



Vue.config.productionTip = false
// Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// axios({
//   url:"http://123.207.32.32:8000/api/v1/home/multidata"
// }).then(res=>{
//   console.log(res)
// })

// axios({
//   url:"http://123.207.32.32:8000/api/v1/home/data",
//   params:{
//     type:'sell',
//     page:1
//   }
// }).then(res=>{
//   console.log(res)
// })

// //发送并发请求
// axios.all([
//   axios({
//     url:"http://123.207.32.32:8000/api/v1/home/data",
//     params:{
//       type:'sell',
//       page:1
//     }
//   }),
//   axios({
//     url:"http://123.207.32.32:8000/api/v1/home/multidata"
//   })
// ]).then(res=>{
//   console.log(res)
// })

// //全局axios对应的网络配置　只有唯一的请求ip
// axios.defaults.baseURL="http://123.207.32.32:8000/api/v1/"
// axios.defaults.timeout="5000"

//创建实例 好处就是请求多个同的地址时不会有影响 可以多个ip
// const instancel=axios.create({
//   baseURL:"http://123.207.32.32:8000/api/v1/",
//   timeout:"5000"
// })
//   instancel({
//     url:'home/data',
//     params:{
//       type:'sell',
//       page:1
//     }
//   }).then(res=>{
//     console.log(res)
//   })
//   instancel({
//     url:'home/multidata',
    
//   }).then(res=>{
//     console.log(res)
//   })


//   const instancel2=axios.create({
//     baseURL:"http://K;LLKSDFIP",
//     timeout:"5000"
//   })
request({
  url:'home/multidata'
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})