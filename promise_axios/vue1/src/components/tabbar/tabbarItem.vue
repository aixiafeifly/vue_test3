<template>
  <div class="tabbarItem" @click="fnTabbar">
    <div v-if="!isActive"><slot name="tabbar-icon"><img src="" alt="" srcset=""></slot></div>
    <div v-else><slot name="tabbar-icon-active"><img src="" alt="" srcset=""></slot></div>
    <div :style="activeColors"><slot name="tabbar-text">首頁</slot></div>
  </div>
 
</template>
<script>
export default {
  name:'tabbarItem',
  data () {
    return {
      
    }
  },
  
  props:{
    link:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){     
      return this.$route.path.indexOf(this.link) !==-1
    },
    activeColors(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    fnTabbar(){
      const that = this
      that.$router.push(this.link)
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
<style  scoped>
  .active{
   color: rosybrown
  }
  img{
    width:30%;  
  }
</style>