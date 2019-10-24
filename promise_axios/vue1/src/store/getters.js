export default{
  getStu(state){
    return state.students.filter(item=>
       item.age>20
     )
   },//调用getters对象里面的方法
   getStuLength(state,getters){
      return getters.getStu.length
   },
   getStuAge(state){　
     return function(age){　　//这里返回函数就可以拿到动态传入的值　　
       return age+"sdfasd"　 //这里拿到传入的值就可以进行处理 ，最后就可以把这getStuAge当做属性使用
     }
   },
   getStuAgeA(state){　
     return age=>age+"sdfasd";
   }
 
}