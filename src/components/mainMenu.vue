<template>
  <div class="mainmenu">
    <grid :cols="4" :show-lr-borders="false">
      <grid-item v-for="(item,index) in menus" :key="index" :label="item.label">
        <img slot="icon" :src="item.url" @click="mainMenuClick(item,index)">
      </grid-item>
    </grid>
  </div>
</template>
<script>
import { Grid, GridItem } from "vux";

export default {
  components: {
    Grid,
    GridItem
  },
  data() {
    return {
      menus: [
        {
          url: "../../static/4.png",
          label: "为明国际"
        },
        {
          url: "../../static/1.png",
          label: "伯克利衔接班"
        },
        {
          url: "../../static/2.png",
          label: "伯克利预科"
        },
        {
          url: "../../static/6.png",
          label: "中美联合培养计划"
        },
        {
          url: "../../static/5.png",
          label: "欧洲项目"
        },
        {
          url: "../../static/3.png",
          label: "精品研学"
        },
        {
          url: "../../static/7.png",
          label: "专场活动"
        },
        {
          url: "../../static/8.png",
          label: "资料下载"
        }

      ]
    };
  },
  methods:{
    mainMenuClick(item,index){
      switch(index){
        case 0:
        this.$router.push({path:'/weimingschool'})
        break;
        case 1:
        this.$router.push({path:'/berkeleyschool'})
        break;
      }
      
    }
  }
};
</script>
<style lang="less">
.mainmenu {

}
</style>

