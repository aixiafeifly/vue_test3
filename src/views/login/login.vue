<template lang="">
  <div>
    <cpn1 :cpn1="num1" :cpn2="num2" @input1="inp1" @input2="inp2">
      <!-- <div>
        我是插入的內容
      </div> -->
      <div slot="header">
        我要替换头部
      </div>
      <div slot="container">
        我要替换中间
      </div>
      <div slot="footer">
        我要替换底部
      </div>
    </cpn1>
    <!-- <cpn1></cpn1> -->
    <br>
    <br>
    <hr>
    <div>
      <cpn2 v-slot="slotProps">
        <span v-for="(item, index) in  slotProps.user" :key="index">{{item}}<span
            v-if="index!=slotProps.user.length-1">----------</span></span>
      </cpn2>
      <cpn2 v-slot="slotProps">
        <span>{{slotProps.user.join(' * ')}}</span>
      </cpn2>
    </div>
  </div>
</template>
<script>
  import cpn1 from './login_copy.vue'
  import cpn2 from './login_slot.vue'
  export default {
    data() {
      return {
        num1: 5,
        num2: 10,
        isShow: false
      }
    },
    components: {
      cpn1,
      cpn2
    },
    mounted() {
      console.log(this.$children, '父访问子');

    },
    methods: {
      inp1(data) {
        let that = this
        that.num1 = data
      },
      inp2(data) {
        let that = this
        that.num2 = data
      }

    },
  };

</script>
