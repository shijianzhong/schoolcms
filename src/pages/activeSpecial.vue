<template>
  <div class="active-special-main">
    <div class="active-special-title">
      活动专场
    </div>
    <div v-for="(item,index) in resources" :key="index"
      class="active-special-item" 
      @click="gotoDetaile(index)"
    >
      <img :src="item.image">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
import headerSearch from "@/components/headerSearch";
import signUpinfo from "@/components/signUpinfo";
import berkeleyHighinfo from "@/components/berkeleyHighinfo";

import { getlistSort,getActiveSpecialList } from "../api";
export default {
  components: {
    headerSearch,
    signUpinfo,
    berkeleyHighinfo
  },
  data() {
    return {
      singup: false,
      resources:[],
    };
  },
  created() {
    this.getActiveSpecialList();
  },
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
    },
    getActiveSpecialList() {
      getActiveSpecialList().then(data => {
        this.resources = data.data;
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

