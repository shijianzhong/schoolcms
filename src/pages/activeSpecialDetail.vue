<template>
    <div class="active-special-detail">
        <header-search :title="titles[index-1]" class="headersearch"></header-search>
        <div class="mainimg">
            <img v-if="index==1" src="../assets/specialactive/4.png">
            <img v-else-if="index==2" src="../assets/specialactive/5.png" alt="">
            <img v-else-if="index==3" src="../assets/specialactive/6.png" alt="">
            <div class="signbtn" v-if="!singup" @click="linkSignPage">报名</div>
        </div>
        <div v-if="!singup">
            <div class="title">
                <div class="titlename">
                    <span style="border-left:5px solid red;margin-right:5px"></span>介绍</div>
            </div>
            <div class="content">
                {{contents}}
            </div>
        </div>
        <sign-upinfo v-else :title="titles[index-1]+'报名方式'"></sign-upinfo>
    </div>
</template>
<script>
import headerSearch from "@/components/headerSearch";
import signUpinfo from "@/components/signUpinfo";
import berkeleyAbbreinfo from "@/components/berkeleyAbbreinfo";

import { getlistSort, getActiveSpecialList } from "../api";
export default {
  components: {
    headerSearch,
    signUpinfo,
    berkeleyAbbreinfo
  },
  data() {
    return {
      singup: false,
      index: 0,
      imgs: [
        "../assets/specialactive/1.png",
        "../assets/specialactive/2.png",
        "../assets/specialactive/3.png"
      ],
      titles: ["蓝思亲子阅读沙龙", "中澳项目开放日", "伯克利学长来了"],
      contents:""
    };
  },
  created() {
    this.index = this.$route.query.index;
    this.getActiveSpecialList();
  },
  methods: {
    linkSignPage() {
      this.singup = !this.singup;
    },
    getActiveSpecialList(){
        getActiveSpecialList().then(data=>{
            
            let oo = data.data.findIndex(x=>x.title==this.titles[this.index-1]);

            if(oo>-1){
                this.contents=data.data[oo].content;
            }
        })
    }
  }
};
</script>
<style lang="less">
.active-special-detail {
  .content{
      margin: 10px 20px;
      background-color: rgba(0,0,0,0.1);
      border-radius: 5px;
      text-indent: 2em;
      padding: 10px 5px;
  }
  .title {
    height: 50px;
    line-height: 50px;
    background-color: rgb(79, 93, 110);
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    .titlename {
      float: left;
      margin-left: 25px;
      h1 {
        color: red;
      }
    }
  }
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
    .signbtn:hover {
      background-color: red;
    }
  }
}
</style>

