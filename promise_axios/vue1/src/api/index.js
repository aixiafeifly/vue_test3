import axios from 'axios'

//第一种
// export function request(config){
//  return new Promise((resolve,reject)=>{
//     const instance=axios.create({
//       baseURL:'',
//       timeout:5000,
//     })
//     instance(config).then(res=>{
//       resolve(res)
//     })
//     .catch(error=>{
//     })
//  })
// }
//第二种
export function request(config){
     const instance=axios.create({
       baseURL:'http://123.207.32.32:8000/api/v1/',
       timeout:5000,
       //还有请求头...headers 如：headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
     })



    //  拦截器
    //这是拦截全局
    // axios.interceptors
    //这是拦截实例，也就是请求
    instance.interceptors.request.use(
      config=>{
      // 请求成功可以处理那些
        //1.比如config中的一些信息不符合服务器要求的，如：携带的请求头head
        //2.网络请求的时候显示一个请求图标。消失的时候在下面响应中处理
        //3.某些网络请求（登录的token）,必须携带一些特殊的信息

        console.log('---',config)
      return config  //这里必须return config 不然就拦截后面就不会响应
    },
    Error=>{

    })
    //响应请求处理
    instance.interceptors.response.use(
      res=>{
        console.log(res)
        return res.data
      },
      err=>{
        console.log(err)
    })

    return instance(config)  //其实instance就是一个promise
   
  }