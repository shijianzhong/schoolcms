<template>
    <div class="brikeleyschools">
        <div class="title">
            <div class="titlename">
                <span style="border-left:5px solid red;margin-right:5px"></span>伯克利衔接班介绍</div>
        </div>
        <div class="maininfo">
            <div class="maintext">
                <div>
                    <p class="textident">
                        伯克利衔接项目是为明教育集团联袂哈佛大学、加州大学伯克利分校、哥伦比亚大学、康涅狄格大学、华盛顿大学、ETS、CollegeBoard等美国顶级大学、教育机构的专家，共同设计的双轨制国际教学课程体系。体系包含小学、初中、高中以及大学预科在内的四个阶段。课程内容包括“国标”体制内教学、为明特色课程、国际衔接课程体系、学生测评体系、国际化教师选拔、培训、管理人才培养体系、教师评估体系、国际服务体系等。
                    </p>
                    <p class="textident">
                        课程以培养国际顶级学术人才、商业精英、未来领袖为终极目标，从国内小学一年级开始直到美国顶级名校预科，跨越十二年进行统筹规划。伯克利衔接课程
                        <span v-if="isloadmore">是从国际领先的潜质、兴趣、心理发展测试、伯克利官方面试开始，通过不断地测评，选拔具有精英潜质的学生，不断调整个性化培养方案， 为学生创造国际化成长的条件、对学生进行学科教学、考试培训、思考和行为养成等全方位培养的课程体系，即GTP课程体系（Gifted,Talented and Persistent Programs)</span>
                    </p>
                    <p class="textident" v-if="isloadmore">
                        体系完美融合体制内课程与国际化课程，学科能力教学与国际素质培养，满足学生和家长全面发展与个性发展的需求，尤其在兼顾国际教育的可能性与现实性上取得重大突破，为中国优秀学生提供了“量力而行”与“量志而行”的国际化发展空间。
                    </p>
                    <p class="textident" v-if="isloadmore">
                        体系涵盖国际化课程体系和体制内课程体系。其中国际化课程体系又包含英语基础课程、国际标准化考试应试课程、USAD美式十项学术全能国际素养课程、国际领导力课程和美国原版课程等五大模块、29门学科。
                    </p>
                </div>

            </div>
            <div v-if="!isloadmore" class="loadmore" @click="loadMore">
                <div style="text-align:center">加载更多</div>
                <div class="icon">
                    <img src="../assets/lodemore.png" alt="">
                </div>
            </div>
            <div v-else class="loadmore" @click="loadMore">
                <div style="text-align:center">收起</div>
            </div>

            <div class="mainimg">
                <div class="item" @click="linkDetail(1)">
                    <img src="../assets/berkeley/primary.png" alt="伯克利小学衔接班">
                    <span class="tex">伯克利小学衔接班</span>
                </div>
                <div class="item" @click="linkDetail(2)">
                    <img src="../assets/berkeley/abbre.png" alt="伯克利初中衔接班">
                    <span class="tex">伯克利初中衔接班</span>
                </div>
                <div class="item" @click="linkDetail(3)">
                    <img src="../assets/berkeley/high.png" alt="伯克利高中衔接班">
                    <span class="tex">伯克利高中衔接班</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isloadmore: false
    };
  },
  methods: {
    loadMore() {
      this.isloadmore = !this.isloadmore;
    },
    linkDetail(index){
        if(index==1){
            this.$router.push({path:"./berkeleyprim"})
        }
    }
  }
};
</script>

<style lang="less">
.brikeleyschools {
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
    .mainimg {
      display: flex;
      display: -webkit-flex;
      padding: 10px 20px;
      justify-content: space-around;
      .item {
        padding: 0px 5px;
        img {
          width: 100%;
        }
        .tex {
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 11px;
          color:rgb(106,72,0);
        }
      }
    }
    .maintext {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
      background-color: rgba(0, 0, 0, 0.1);
      padding: 10px 20px;
      margin: 10px 0px;
      .textident {
        text-indent: 2em;
      }
    }
    .loadmore {
      width: 50px;
      font-size: 10px;
      margin: 0 auto;
      height: 50px;
      .icon {
        width: 20px;
        margin: 0 auto;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}
</style>

