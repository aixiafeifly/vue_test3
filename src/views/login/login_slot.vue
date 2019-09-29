<template>
  <div>
    作用域:：意义在于，替换数据展示的方式
    <slot :user="user">
    </slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: ['迪丽热巴.木拉提拉', '迪丽热巴.木拉提拉1', '迪丽热巴.木拉提拉2', '迪丽热巴.木拉提拉3']
      }
    },
  }

</script>
