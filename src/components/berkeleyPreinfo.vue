<template>
    <div class="berkeleyhighinfo">
        <div class="title">
            <div class="titlename">
                <span style="border-left:5px solid red;margin-right:5px"></span>伯克利预科介绍</div>
        </div>
        <div class="maininfo">
            <div class="maintext">
                <div>
                    <p class="textident">
                        加州大学伯克利预科项目是为明教育集团联袂加州大学伯克利分校，针对中国优秀高中生特点和需求联合开发的美国顶级大学预科项目，也是中美国际教育合作的历史性突破。该项目为中国优秀高中生搭建了直申以加州大学伯克利分校为代表的美国顶级名校入学通道，也得到了美国顶级大学的认可，毕业生在至少获取加州大学系统（包括伯克利、洛杉矶、圣巴巴拉、戴维斯、圣地亚哥、欧文、河滨、圣克鲁兹和默塞德等九所分校）的录取基础之上，更以加州大学伯克利分校、加州大学洛杉矶分校、麻省理工学院、普林斯顿大学、斯坦福大学、耶鲁大学、哥伦比亚大学、布朗大学、杜克大学、伊利诺伊大学厄巴纳-香槟分校、西北大学、史密斯学院等多所美国顶级大学和文理学院为项目出口。 加州大学伯克利预科项目针对中国学生特点和需求量身定制，涵盖伯克利预科教学、国际素养教学、国际标准化考试培训和高端留学申请指导等，并根据学生未来专业需求分设理工科（STEM TRACK）和人文学科（HUMANITY TRACK）课程体系，同时为优秀生提供选修被全美所有主要高校所认可的伯克利大学学分课程机会。中美双方强强联手、直击痛点，通过培养学生核心技能素养，帮助中国最优秀的中学生成功进入国际顶级名校。
                    </p>
                    <p class="textident">
                        项目使命：面向21世纪为中国培养国际精英。在进一步完善和强化中国优秀高中生在学科基础尤其是STEM相关领域固有优势的同时，适应世界和时代需求，大力提升批判性思维能力，拓展国际化视野，提升人文素养，培养融入和引领国际化团队的能力，以及在梳理学业、事业目标和人生梦想的基础上，提升学生规划自我，自我导向和自我激励等能力。
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

