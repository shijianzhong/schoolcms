<template>
    <div class="mainmenu">
        <grid :cols="3" :show-lr-borders="false">
            <grid-item v-for="i in 6" :key="i">
                <span class="grid-center">{{i}}</span>
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
    return {};
  }
};
</script>
<style lang="less">
.mainmenu {
  .grid-center {
    text-align: center;
  }
}
</style>

