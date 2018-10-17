<template>
    <div class="active-special-main">
        <div class="active-special-title">
            活动专场
        </div>
        <div class="active-special-item" @click="gotoDetaile(1)">
            <img src="../assets/specialactive/1.png">
            <div>蓝思亲子阅读沙龙</div>
        </div>
        <div class="active-special-item" @click="gotoDetaile(2)">
            <img src="../assets/specialactive/2.png">
            <div>中澳项目开放日</div>
        </div>
        <div class="active-special-item" @click="gotoDetaile(3)">
            <img src="../assets/specialactive/3.png">
            <div>伯克利学长来了</div>
        </div>
    </div>
</template>
<script>
import headerSearch from "@/components/headerSearch";
import signUpinfo from "@/components/signUpinfo";
import berkeleyHighinfo from "@/components/berkeleyHighinfo";

import { getlistSort } from "../api";
export default {
  components: {
    headerSearch,
    signUpinfo,
    berkeleyHighinfo
  },
  data() {
    return {
      singup: false
    };
  },
  created() {},
  methods: {
    linkSignPage() {
      this.singup = !this.singup;
    },
    gotoDetaile(index) {
      this.$router.push({
        path: "/activespecialdetail",
        query: {
          index: index
        }
      });
    }
  }
};
</script>
<style lang="less">
.active-special-main {
  font-size: 17px;
  padding: 0px 20px;
  .active-special-title {
    text-align: center;
    height: 3em;
    line-height: 3em;
    font-size: 20px;
  }
  .active-special-item {
    margin-bottom: 30px;
    img {
      width: 100%;
      height: auto;
    }
    div {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>

