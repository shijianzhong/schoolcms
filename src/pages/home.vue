<template>
<div class="homeCon">
    <group>
      <first-page></first-page>
    </group>
    <tabbar class="tabbar">
      <tabbar-item>
        <img slot="icon" src="../../static/first.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../../static/second.png">
        <span slot="label">活动预约</span>
      </tabbar-item>
      <tabbar-item selected>
       <img slot="icon" src="../../static/third.png">
        <span slot="label">为明国际</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../static/tel.png">
        <span slot="label">电话咨询</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../static/me.png">
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

<style lang="less">

.homeCon{
  margin-top: 45px;
  .tabbar{
    position: fixed;
  }
}
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>


