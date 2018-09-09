<template>
    <div class="cooperatehighinfo">
        <div class="title">
            <div class="titlename">
                <span style="border-left:5px solid red;margin-right:5px"></span>中美联合培养计划</div>
        </div>
        <div class="maininfo">
            <div class="maintext">
                <div>
                    <h4>项目优势：</h4>
                    <h6> ——模式优势： “扶上马、送一程”。</h6>
                    <p class="textident">
                        项目分为在为明学校国际部就读1-3年和在美国高中就读1-2年两个阶段。采取“一校三舍”的模式，“一校”即为明学校国际部，“三舍”即在为明学校国际部学习，在美国高中学习和在为明美国学习中心生活、活动和参加辅导。为明中美高中联合培养项目，境内外协调一致，系统化管理，标准化操作，教学、服务每个环节都直达升学目标，体现效率。
                    </p>
                </div>
                <div>
                    <h6> ——体系优势：</h6>
                    <p class="textident">
                        为明和哈佛大学教育学院“零点计划（Project Zero）”旗下“全球竞争力（Global Competence）”项目合作，将尖端教育理念应用到实际教学中，全面塑造学生专业能力和品质。
                    </p>
                    <p class="textident" v-if="isloadmore">
                        美国高中课业体系采取中美互认学分的模式，同步课程体系及师资配置，同步测评及考试体系，与美国孩子同步升学。
                    </p>
                    <p class="textident" v-if="isloadmore">
                        国际升学课程体系包括ESL，TOEFL，英美文学，英文高级写作等课程，体系完备。
                    </p>
                    <p class="textident" v-if="isloadmore">
                        留学申请体系依学生特性评估，制定留学申请方案，特聘专家辅助学生申请。 中美一体化管理及服务体系涵盖国内教学，生活管理和美国学习中心的辅导培训。为明美国学习中心特设“ISC”团队辅导学生可以保持良好的学业成绩，同时特设“RA”团队照顾孩子吃穿住用行，帮助孩子适应美国生活。 家校沟通体系，家长通过为明交流平台，可随时了解孩子学业进展和生活细节，家校配合，促进学生成长。
                    </p>
                    <h6 v-if="isloadmore"> ——品质优势：</h6>
                    <p class="textident" v-if="isloadmore">
                        学科设置接轨美国高中课程；教学方法采用美国高中课内外活动组织形式；教师甄选参考业内最高标准；教学环境同步国际化标准。项目运营7年有余，已经成功帮助逾600名学生实现成功留学和留学成功，其中60%以上被美国前100大学录取。
                    </p>
                    <p class="textident" v-if="isloadmore">
                        多元化、分层级的课程体系，学生在完成必修课程的同时，还可以根据兴趣选修各个领域的课程，如英语文学、艺术鉴赏、音乐理论、世界历史、国际象棋、跆拳道、摄影等。
                    </p>
                    <p class="textident" v-if="isloadmore">
                        别具特色的社会实践活动。为明国际教育为项目内学子特别设定的文化交流项目，让同学们通过商业领袖拓展训练、国际领袖营、模拟联合国、主题游学（夏、冬令营）、行业职业体验、中西文化品鉴、职业技能培育等互动参与性极强的活动来锻炼自己逻辑思维、组织策划、管理统筹、沟通交流以及处理实际问题等多方面的能力，让他们终身受益。
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
            <div class="title" style="margin:10px 0px;">
                <div class="titlename">
                    <span style="border-left:5px solid red;margin-right:5px"></span>美国合作中学</div>
            </div>
            <div class="mainimg">
                <img src="../assets/cooperahigh/main.png" alt="">
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
    linkDetail(index) {
      if (index == 1) {
        this.$router.push({ path: "./berkeleyprim" });
      } else if (index == 2) {
        this.$router.push({ path: "./berkeleyabbre" });
      } else if (index == 3) {
        this.$router.push({ path: "./berkeleyhigh" });
      }
    }
  }
};
</script>

<style lang="less">
.cooperatehighinfo {
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
      padding: 0px 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .maintext {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
      padding: 10px 20px;
      margin: 10px 0px;
      h6 {
        color: rgb(108, 89, 19);
      }
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

