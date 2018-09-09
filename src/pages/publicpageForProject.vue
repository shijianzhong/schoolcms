<template>
    <div class="itemproject">
        <header-search title="澳洲项目" class="headersearch"></header-search>
        <div class="mainimg">
            <img src="../assets/itemproject/main.png">
            <div class="signbtn" v-if="!singup" @click="linkSignPage">报名</div>
        </div>
        <project-pageinfo v-if="!singup"></project-pageinfo>
        <sign-upinfo v-else title="澳洲项目报名方式"></sign-upinfo>
    </div>
</template>
<script>
import headerSearch from "@/components/headerSearch";
import signUpinfo from "@/components/signUpinfo";
import projectPageinfo from "@/components/projectPageinfo"

import { getlistSort } from "../api";
export default {
  components: {
    headerSearch,
    signUpinfo,
    projectPageinfo
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
.itemproject {
  margin-top: 45px;
  font-size: 17px;
  position: relative;
  .headersearch {
    position: absolute;
    width: 100%;
    z-index: 2;
    top: 0px;
  }
  .mainimg {
    position: relative;
    img {
      width: 100%;
      display: block;
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

