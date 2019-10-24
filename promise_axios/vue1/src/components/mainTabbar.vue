<template>
  <div>
    <tabbar>
      <tabbar-item v-for="(item,index) in tabbarData" :key="index" :link='item.link' activeColor="pink">
        <img :src="item.imgSrc" alt="" slot="tabbar-icon">
        <img :src="item.imgActive" alt="" slot="tabbar-icon-active">
        <span slot="tabbar-text">{{item.title}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  import tabbar from './tabbar/tabbar'
  import tabbarItem from './tabbar/tabbarItem'
  export default {
    components: {
      tabbar,
      tabbarItem
    },
    data() {
      return {
        tabbarData: [{
            title: '首頁',
            imgSrc: require('../assets/images/tabbar/home.png'),
            imgActive: require('../assets/images/tabbar/home_sel.png'),
            link: '/home'
          },
          {
            title: '类别',
            imgSrc: require('../assets/images/tabbar/mine.png'),
            imgActive: require('../assets/images/tabbar/mine_sel.png'),
            link: '/category'
          },
          {
            title: '购物车',
            imgSrc: require('../assets/images/tabbar/navigation.png'),
            imgActive: require('../assets/images/tabbar/navigation_sel.png'),
            link: '/car'
          },
          {
            title: '我的',
            imgSrc: require('../assets/images/tabbar/system.png'),
            imgActive: require('../assets/images/tabbar/system_sel.png'),
            link: '/profile'
          },
        ]
      }
    }
  }
</script>