<template>
    <div class="berkeleyhighinfo">
        <div class="title">
            <div class="titlename">
                <span style="border-left:5px solid red;margin-right:5px"></span>伯克利高中衔接班介绍</div>
        </div>
        <div class="maininfo">
            <div class="maintext">
                <div>
                    <p class="textident">
                        伯克利衔接项目（高中阶段）是为明教育集团联袂哈佛大学、加州大学伯克利分校、哥伦比亚大学、康涅狄格大学、华盛顿大学、ETS、College Board等美国顶级大学、教育机构的专家，共同设计的优质国际项目的精粹阶段。项目包括国际衔接课程体系、学生测评体系、国际化教师选拔培训、管理人才培养体系、教师评估体系、国际服务体系等。
                    </p>
                    <p class="textident">
                        项目面向中国最优秀的初中毕业生招生，以培养21世纪世界政要人才、商业领袖为目标，完美融合体制内课程与国际化课程，学科能力教学与国际素质培养，满足学生和家长全面发展与个性发展的需求，尤其在兼顾国际教育的可能性与现实性上取得重大突破，为中国优秀高中生提供了“量力而行”与“量志而行”的国际化发展空间。
                    </p>
                    <p class="textident">
                        项目实施过程中，明确提出各个年龄阶段、各个国内国际课程的培养目标；联合国内，国外资源平台，为学生创造快速成长的环境；并同比国际同龄学生成长进度，延承中国传统教学精髓，引进国际教育精华。尤其在国际标准化考试教学环节有缜密设计，帮助学生在世界通用学生评测标准体系中，有突出表现。项目创造性地集结学校、家长、社区、社会机构、顶级国际合作伙伴等多方力量，为孩子的未来创造惊喜！
                    </p>
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
  methods: {}
};
</script>

<style lang="less">
.berkeleyhighinfo {
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
          color: rgb(106, 72, 0);
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

