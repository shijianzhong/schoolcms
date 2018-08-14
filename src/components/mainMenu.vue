<template>
  <div class="mainmenu">
    <grid :cols="4" :show-lr-borders="false">
      <grid-item v-for="(item,index) in menus" :key="index" :label="item.label">
        <img slot="icon" :src="item.url">
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
          url: "",
          label: "为明国际"
        },
        {
          url: "",
          label: "伯克利衔接班"
        },
        {
          url: "",
          label: "伯克利预科"
        },
        {
          url: "",
          label: "中美联合培养计划"
        },
        {
          url: "",
          label: "欧洲项目"
        },
        {
          url: "",
          label: "精品研学"
        },
        {
          url: "",
          label: "专场活动"
        },
        {
          url: "",
          label: "资料下载"
        }

      ]
    };
  }
};
</script>
<style lang="less">
.mainmenu {

}
</style>

