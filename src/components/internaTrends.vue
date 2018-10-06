<template>
    <div class="internat">
        <div class="title">
            <div class="titlename"><span style="border-left:5px solid red;margin-right:5px"></span>为明国际动态</div>
            <div v-if="!isshowmore" @click="showMore" class="morebtn">更多></div>
            <div v-else @click="showMore" class="morebtn">收起</div>
        </div>
        <div v-if="!isshowmore" class="maininfo">
            <div class="item" v-if="index<2" v-for="(item,index) in items" :key="index">
                <div class="item-left">
                    <h5 @click="goDetail(item)" class="subject">{{item.title}}</h5>
                    <div class="info">
                        <span>{{item.pbtime}}</span>
                        <span>阅读{{item.readnums}}人</span>
                    </div>
                </div>
                <div class="item-right">
                    <img :src="item.headimg">
                </div>
                </div>
            </div>
            <div v-else class="maininfo">
                <div class="item" v-for="(item,index) in items" :key="index">
                    <div class="item-left">
                        <h5 @click="goDetail(item)" class="subject">{{item.title}}</h5>
                        <div class="info">
                            <span>{{item.pbtime}}</span>
                            <span>阅读{{item.readnums}}人</span>
                        </div>
                    </div>
                    <div class="item-right">
                        <img :src="item.headimg">
                </div>
                    </div>
                </div>
            </div>
</template>
<script>
import { SelectInterDynamics ,UpdateInterDynamicsReadtimes} from "../api";
export default {
  data() {
    return {
      items: [],
      isshowmore: false
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      SelectInterDynamics().then(res => {
        if (res.success) {
          this.items = res.data;
        }
      });
    },
    showMore() {
      this.isshowmore = !this.isshowmore;
    },
    goDetail(item){
        this.$router.push({
            path:'/detailinter',
            query:{
                item:item
            }
        })
    }
  }
};
</script>

<style lang="less">
.internat {
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
    .item {
      display: flex;
      display: -webkit-flex;
      height: 6em;
      padding: 10px 0px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      .item-left {
        width: 65%;
        .subject {
          height: 3em;
          line-height: 3em;
          text-align: center;
          font-size: 1em;
        }
        .info {
          height: 3em;
          display: flex;
          display: -webkit-flex;
          justify-content: space-around;
          color: rgba(0, 0, 0, 0.5);
          font-size: 0.8em;
        }
      }
      .item-right {
        width: 35%;
        img {
          max-width: 75%;
          max-height: 90%;
        }
      }
    }
  }
}
</style>

