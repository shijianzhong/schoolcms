<template>
<div>
    <group>
      <first-page></first-page>
    </group>
    <tabbar>
      <tabbar-item>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
    
        <span slot="label">活动预约</span>
      </tabbar-item>
      <tabbar-item selected>
       
        <span slot="label">为明国际</span>
      </tabbar-item>
      <tabbar-item>
    
        <span slot="label">电话咨询</span>
      </tabbar-item>
      <tabbar-item>
    
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
import firstPage from './firstPage'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    firstPage
  },
  data () {
    return {
        
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
