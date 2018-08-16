<template>
    <div class="firstPage">
        <header-search class="headersearch"></header-search>
        <swiper loop auto :list="carouselList" :index="carouselIndex" @on-index-change="carouselIndexChange"></swiper>
        <p>current index: {{carouselIndex}}</p>
        <main-menu></main-menu>
        <div class="signup">
          <x-button mini>UCB预科报名</x-button>
        </div>
        <admit-ino></admit-ino>
        <show-cases></show-cases>
    </div>
</template>
<script>
const baseList = [
  {
    url: "javascript:",
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
    title: "送你一朵fua"
  },
  {
    url: "javascript:",
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
    title: "送你一辆车"
  },
  {
    url: "javascript:",
    img: "https://static.vux.li/demo/5.jpg", // 404
    title: "送你一次旅行",
    fallbackImg:
      "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
  }
];
const urlList = baseList.map((item, index) => ({
  url: "http://m.baidu.com",
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}));
import { Swiper,XButton} from "vux";
import headerSearch from '@/components/headerSearch'
import mainMenu from '@/components/mainMenu'
import admitIno from '@/components/admitIno'
import showCases from '@/components/showCases'
export default {
  components: {
    Swiper,
    headerSearch,
    mainMenu,
    XButton,
    admitIno,
    showCases
  },
  data() {
    return {
      carouselList: urlList,
      carouselIndex:0,
    };
  },
  methods: {
    carouselIndexChange(index) {
      this.carouselIndex = index;
    },

  }
};
</script>
<style lang="less">
    .firstPage{
        .headersearch{
            position: absolute;
            width: 100%;
            z-index: 2
        }
        .signup{
          height: 10rem;
          background-color: red;
          text-align: center;
          line-height: 10rem;
        }
    }
</style>

