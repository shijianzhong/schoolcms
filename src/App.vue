<template>

  <div id="app" style="height:100%;">
    <view-box ref="viewBox">
      <x-header slot="header" style="width:100%; position:absolute;left:0;top:0;z-index:100;">cms</x-header>
      <router-view></router-view>
    </view-box>
  </div>
</template>

<script>
import { ViewBox ,XHeader} from "vux";
export default {
  components: {
    ViewBox,
    XHeader
  },
  name: "app"
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
</style>
