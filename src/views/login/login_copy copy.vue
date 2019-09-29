<template lang="">
  <div>
    <input type="text" name="" :value="dcpn1" @input="inpval1($event)">
    <input type="text" name="" :value="dcpn2" @input="inpval2($event)">
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
    watch: {
      dcpn1: function (val) {

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
