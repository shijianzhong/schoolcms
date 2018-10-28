<template>
  <div class="firstPage">
    <header-search title="为明国际教育" class="headersearch"></header-search>
    <swiper  loop auto :list="carouselList" :index="carouselIndex" @on-index-change="carouselIndexChange"></swiper>
    <main-menu v-model="mainMenuIndex"></main-menu>
    <div class="signup" @click="signclick">
      <img :src="banImg.imgsrc">
      <x-button class="signupbtn" mini>UCB预科报名</x-button>
    </div>
    <admit-ino></admit-ino>
    <show-cases></show-cases>
    <interna-trends></interna-trends>
    <cooperation-school></cooperation-school>
  </div>
</template>
<script>
const baseList = [
  // {
  //   url: "javascript:",
  //   img: "http://119.29.193.74:3001/upFile/1535758727676.png",
  // title: "送你一朵fua"
  // },
  // {
  //   url: "javascript:",
  //   img: "http://119.29.193.74:3001/upFile/1535758758608.png",
  // title: "送你一辆车"
  // },
  // {
  //   url: "javascript:",
  //   img: "https://static.vux.li/demo/5.jpg", // 404
  //   title: "送你一次旅行",
  //   fallbackImg:
  //     "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
  // }
];
const urlList = baseList.map((item, index) => ({
  url: "http://m.baidu.com",
  img: item.img,
  fallbackImg: item.fallbackImg
  // title: `(可点击)${item.title}`
}));
import { Swiper, XButton } from "vux";
import headerSearch from "@/components/headerSearch";
import mainMenu from "@/components/mainMenu";
import admitIno from "@/components/admitIno";
import showCases from "@/components/showCases";
import internaTrends from "@/components/internaTrends";
import cooperationSchool from "@/components/cooperationSchool";
import { getlistSort, getCarouselList ,getEmitInfoList} from "../api";
export default {
  components: {
    Swiper,
    headerSearch,
    mainMenu,
    XButton,
    admitIno,
    showCases,
    internaTrends,
    cooperationSchool
  },
  data() {
    return {
      carouselList: [],
      carouselIndex: 0,
      mainMenuIndex: -1,
      banImg:{},
    };
  },
  watch: {
    mainMenuIndex(val) {
    }
  },
  created() {
    getCarouselList().then(res => {
      console.log(res);
      if (res.success) {
        debugger
        var indx = res.data.findIndex(x=>x.type=="1");
        if(indx>-1){
        this.banImg = res.data.splice(indx)[0];}

        this.carouselList=res.data.map((item, index) => ({
          img: item.imgsrc,
          // url:'/michiganlearncenter'
          url:item.url
          // fallbackImg: item.fallbackImg
        }));
        console.log(this.carouselList.length);
      }
    });
  },
  methods: {
    carouselIndexChange(index) {
      this.carouselIndex = index;
    
    },
    signclick(){
      this.$router.push({path:'/berkeleypre'});
    }
  }
};
</script>
<style lang="less">
.firstPage {
  position: relative;
  .headersearch {
    position: absolute;
    width: 100%;
    z-index: 2;
    top: 0px;
  }
  .signup {
    position: relative;
    padding: 10px 0;
    img {
      width: 100%;
      display: block;
    }
    .signupbtn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

