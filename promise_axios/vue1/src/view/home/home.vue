<template>
  <div>
     首頁  首頁  首頁  首頁  首頁  首頁
     <button @click="$store.commit('add',5)">+</button>
     {{$store.state.coun}}
      <button @click="$store.commit('reduce',2)">-</button>
      {{$store.getters.getStu}}
      {{$store.getters.getStuLength}}
      <br>
      getters动态传值：  {{$store.getters.getStuAge(18)}}
      {{$store.getters.getStuAgeA(21)}}
      <div>
        添加数据:<button @click="FNmutation">添加数据</button>
        {{$store.state.students}}
      </div>  
      <div>
        响应式添加：
        <button @click="FNUSERINFO">userinfo</button>
        {{$store.state.userInfo}}
      </div>
      <div>
        修改属性：
        <button @click="FNaction">action</button>
        {{$store.state.userInfo.name}}
      </div>
      <div>
        mudules:{{$store.state.a.name}}
       
      </div>
  </div>
</template>
<script>
import { SOME_MUTATION,FN_MUTATION } from '../../store/mutation-types.js'
export default {
  name:'home',
  data () {
    return {
      
    }
  },
  mounted () {
   
  },
  created () {
    console.log(this.$store.state.a.name)
  },
  methods: {
    FNmutation(){
      let data={id:'11111',name:'添加數據',age:132}
      // 第一種方式
      this.$store.commit(FN_MUTATION,data)
      // 第二種方式 這裡是以对象的形式传参的，
      this.$store.commit({
        type:'FNmutation',
        data:'32332'
      })
    },
    FNUSERINFO(){
      console.log('mutation-types');
      this.$store.commit(SOME_MUTATION)
    },
    FNaction(){
      // 第一种
      // 1－不传参
      //  this.$store.dispatch('updataInfo')
      // // 2-传参
      // this.$store.dispatch('updataInfo','传参')
      // 3-可以传对象
    //  this.$store.dispatch('updataInfo',{
    //    message:'攜帶的参数',
    //    success:()=>{
    //      console.log('已经完成里面的')
    //    }
    //  })

    //第二种以ｐｒｏｍｉｓｅ的形式
    this.$store.dispatch('updataInfo',{
       message:'攜帶的参数',
       success:()=>{
         console.log('已经完成里面的')
       }
     }).then(res=>{
        this.$store.commit('fnactive',res)
       console.log(res,'SDF')
     })

    }
  }
  
}
</script>