<template>
    <div class="berkeleyprim">
        <header-search class="headersearch"></header-search>
        <div class="mainimg">
            <img src="../assets/berkeley/prim/main.png">
            <div class="signbtn" v-if="!singup" @click="linkSignPage">报名</div>
        </div>
        <berkeley-priminfo v-if="!singup"></berkeley-priminfo>
        <sign-upinfo v-else title="伯克利小学衔接班报名方式"></sign-upinfo>
    </div>
</template>
<script>
import headerSearch from "@/components/headerSearch";
import signUpinfo from "@/components/signUpinfo";
import berkeleyPriminfo from "@/components/berkeleyPriminfo"

import { getlistSort } from "../api";
export default {
  components: {
    headerSearch,
    signUpinfo,
    berkeleyPriminfo
  },
  data() {
    return {
        singup:false
    };
  },
  created() {},
  methods: {
      linkSignPage(){
          this.singup=!this.singup;
      }
  }
};
</script>
<style lang="less">
.berkeleyprim {
  margin-top: 45px;
  font-size: 17px;
  .headersearch {
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  .mainimg {
    position: relative;
    img {
      width: 100%;
    }
    .signbtn {
      position: absolute;
      z-index: 5;
      bottom: 20px;
      width: 80px;
      text-align: center;
      background-color: rgb(9, 12, 32);
      color: white;
      border-radius: 30px;
      right: 10px;
      cursor: pointer;

    }
    .signbtn:hover{
        background-color:red;
    }
  }
}
</style>

