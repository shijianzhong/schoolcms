<template>
    <div class="showcases">
        <div class="title">
            <div class="titlename">
                <span style="border-left:5px solid red;margin-right:5px"></span>ShowCases</div>
            <div v-if="!isshowmore" @click="showmoreClick" class="morebtn">更多></div>
            <div v-else @click="showmoreClick" class="morebtn">收起></div>
        </div>
        <div v-if="!isshowmore" class="maininfo">
            <div v-if="index<2" class="maininfo-item" v-for="(item,index) in items" :key="index">
                <div class="item-left">
                    <div class="item-head">
                        <img :src="item.headimg">
                    </div>
                    <div class="item-empty">

                    </div>
                </div>
                <div class="item-right">
                    <h5>{{item.title}}</h5>
                    <p v-html="item.content">
                    </p>

                </div>
            </div>
        </div>
        <div v-else  class="maininfo">
            <div class="maininfo-item" v-for="(item,index) in items" :key="index">
                <div class="item-left">
                    <div class="item-head">
                        <img :src="item.headimg">
                    </div>
                    <div class="item-empty">

                    </div>
                </div>
                <div class="item-right">
                    <h5>{{item.title}}</h5>
                    <p v-html="item.content">
                       
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
//
import { getCasesList } from "../api";
export default {
  data() {
    return {
      items: [],
      isshowmore:false,
    };
  },
  created() {
    this.getCasesList();
  },
  methods: {
    getCasesList() {
      getCasesList().then(data => {
        this.items = data.data;
      });
    },
    showmoreClick(){
        this.isshowmore=!this.isshowmore;
    }
  }
};
</script>

<style lang="less">
.showcases {
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
    .maininfo-item {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding-bottom: 20px;
      padding-top: 20px;
      padding-right: 10px;
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item-left {
        width: 40%;
        .item-head {
          height: 50%;
          text-align: center;
          img {
            border-radius: 50%;
            max-height: 100%;
            max-width: 100%;
          }
        }
        .item-empty {
          height: 50%;
        }
      }
      .item-right {
        width: 60%;
        p {
          font-size: 0.8em;
          color: rgba(0, 0, 0, 0.5);
        }
        h5 {
          margin-bottom: 5px;
          font-size: 1em;
        }
      }
    }
  }
}
</style>

