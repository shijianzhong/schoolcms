<template>
<div class="homeCon">
    <group>
      <first-page v-if="selected==0"></first-page>
      <active-special v-else-if="selected==1"></active-special>
      <weiming-school v-else-if="selected==2"></weiming-school>
    </group>
    <tabbar class="tabbar" v-model="selected" @on-index-change="indexchange">
      <tabbar-item>
        <img slot="icon" src="../../static/first.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item >
        <img slot="icon" src="../../static/second.png">
        <span slot="label">活动预约</span>
      </tabbar-item>
      <tabbar-item>
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
import weimingSchool from './weimingSchool.vue'
import activeSpecial from './activespecial.vue'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    firstPage,
    weimingSchool,
    activeSpecial
  },
  watch:{
    selected(newval,oldval){
      console.log(newval);
    }
  },
  data () {
    return {
        selected:0,
    }
  },
  methods:{
    indexchange(val){
      console.log(val);
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


