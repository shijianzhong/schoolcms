<template>
    <div class="projectpageinfo">
        <div class="title">
            <div class="titlename">
                <span style="border-left:5px solid red;margin-right:5px"></span>澳洲项目介绍</div>
        </div>
        <div class="maininfo">
            <div class="maintext">
                <div>
                    <h4>-SACE南澳国际高中课程</h4>
                    <p class="textident">
                        澳大利亚SACE南澳国际高中课程是为明教育集团与澳大利亚南澳洲高考局（SACE Board）合作的澳洲国际高中课程。该课程与IB、A-Level并称为三大国际顶尖课程。项目主要面对国内9、10年级学生招生，学生在为明学校学习3年澳洲本土高中课程，并通过南澳高考局举办的课程统考后即可取得SACE证书。入读为明中澳班的学生享受澳洲学籍，每年11月中澳项目学生会由项目老师带领赴澳洲进行学籍注册，从而享受与本土学生同等待遇。中澳国际高中课程是首屈一指的国际课程，毕业生可以申请澳大利亚及其他英联邦国家大学本科课程，如英国，加拿大，新西兰等国家，专业选择广泛。目前，为明教育集团在青岛，武汉，广州和重庆四校区开设了SACE中澳班，成都即将在今年秋季成为第五所开设中澳班的校区。该项目招生以吸纳优质生源为根本，培养具有国际化视野人才为己任，将莘莘学子打造成为拥有申请澳洲八大名校在内的世界排名百强名校的综合优秀毕业生。2018年春季，第一届新生已经入学开始了为期三年的澳高中课程学习。学生毕业并获得证书需要满足两个条件：第一，完成SACE课程要求内容；第二，学习成绩达到合格标准。SACE的评分方式为校内考评加上州统考。校内考评占最后澳洲考考成绩（简称ATAR）的70%，最后的州统考占30%，因此中澳国际高中课程对比国内高考更加容易取得优异成绩从而考取世界名校。拥有ATAR成绩的学生不需要提供雅思成绩，可直接申请澳洲本科大一课程，免去预科学习，三年完成本科课程。
                    </p>
                    <h4>-SACE南澳高考局</h4>
                    <p class="textident">
                        1983年由南澳大利亚州政府提出法案，组织成立南澳高考局委员会（SACE Board）。 SACE董事来自于学校，政府和天主教的部门。它除了评估本州的高中学生以外还评估了北部领土和亚洲各中心学生的成绩。南澳高考局与个教育部门和广泛的利益相关者合作，董事会还与南澳大利亚的培训和技能委员会和培训部门有密切合作，南澳高考局董事会目前有是一个董事会成员担任，专职的大约110名人员，教育部教育和儿童发展部部长分管负责南澳大利亚高考局。
                    </p>
                </div>
            </div>
            <div class="mainimg">
                <div>
                    <img src="../assets/itemproject/sace.png" alt="">
                </div>
                <div>
                    <img src="../assets/itemproject/sacelogo.png" alt="">
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
.projectpageinfo {
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

