export default{
  updataInfo(context,data){
    // 第一种
    // setTimeout(() => {
    //   console.log(data.message);
    //   data.success()
    //   // context.commit('fnactive',data)
    // }, 1000);
    // 第二种
    return new Promise((res,err)=>{
      setTimeout(() => {
        console.log(data.message);
        data.success()
        res('ＶＵＥＸ中传过来的')
        // context.commit('fnactive',data)
      }, 1000);
    })
  }
}