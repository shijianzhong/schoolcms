<template>
    <div class="admitinfo">
        <div class="title">
            <div class="titlename">
                <span style="border-left:5px solid red;margin-right:5px"></span>录取捷报</div>
            <div v-if="!isshowmore" @click="showMore"  class="morebtn">更多></div>
            <div v-else @click="showMore"  class="morebtn">收起</div>
        </div>
        <div v-if="!isshowmore" class="maininfo">
            <div v-if="index<6" class="item" v-for="(item,index) in items" :key="index">{{item.emiteinfo}}</div>
        </div>
        <div v-else class="maininfo">
            <div class="mainfo-moreinfo">
                <div v-for="(item,index) in items" :key="index">{{item.emiteinfo}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { getEmitInfoList } from "../api";
export default {
  data() {
    return {
      items: [],
      isshowmore:false,
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      getEmitInfoList().then(res => {
        if(res.success){
            this.items=res.data;
        }
      });
    },
    showMore(){
        this.isshowmore=!this.isshowmore;
    }
  }
};
</script>

<style lang="less">
.admitinfo {
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

    .morebtn {
      float: right;
      margin-right: 15px;
    }
  }
  .maininfo {
    margin: 10px 0px;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 50%;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .mainfo-moreinfo{
        height: 200px;
        overflow: auto;
        width: 100%;
        div{
            text-align: left;
            padding: 2px 5px;
        }
    }
  }
}
</style>

