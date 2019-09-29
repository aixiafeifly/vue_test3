<template lang="">
  <div>
    <input type="text" name="" v-model="dcpn1">
    <input type="text" name="" v-model="dcpn2">
    <div>

      第一個
      <span>props:{{cpn1}}</span>---------------
      <span>data{{dcpn1}}</span>
    </div>
    <div>
      第二個
      <span>props:{{cpn2}}</span>------------
      <span>data:{{dcpn2}}</span>
    </div>
    <div>
      <!-- <slot>我是默认值</slot> -->
      <slot name="header">头部</slot>
      <slot name="container">中间</slot>
      <slot name="footer">底部</slot>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        dcpn1: this.cpn1,
        dcpn2: this.cpn2
      }
    },
    props: {
      cpn1: Number,
      cpn2: Number
    },
    mounted() {
      console.log(this.$parent, '子访问父');

    },
    watch: {
      dcpn1: function (val) {
        let that = this
        that.dcpn2 = val * 100
        that.$emit("input2", that.dcpn2)
      },
      dcpn2: function (val) {
        let that = this
        that.dcpn1 = val / 100
        that.$emit("input1", that.dcpn1)
      }
    },
    methods: {
      inpval1(event) {
        let that = this
        that.dcpn1 = parseInt(event.target.value)
        that.$emit("input1", that.dcpn1)
        that.dcpn2 = that.dcpn1 * 100
        that.$emit("input2", that.dcpn2)



      },
      inpval2(event) {
        let that = this
        that.dcpn2 = parseInt(event.target.value)
        that.$emit("input2", that.dcpn2)
        that.dcpn1 = that.dcpn2 / 1000
        that.$emit("input1", that.dcpn1)

      }
    },
  };

</script>
