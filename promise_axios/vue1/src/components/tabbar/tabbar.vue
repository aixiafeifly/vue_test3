<template>
  <div class="tabbar">
    <div class="tabbarBox">
      <slot>
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tabBar',
    data() {
      return {}
    },

  }
</script>
<style lang="less" scoped>
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #f8f8f8;
    width: 100%;

    .tabbarBox {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex: 1;
      padding: .4rem 0;

      img {
        width: 30%;
      }
    }
  }
</style>
<style lang="">
  
</style>