<template>
    <div class="showcases">
        <div class="title">
            <div class="titlename">
                <span style="border-left:5px solid red;margin-right:5px"></span>ShowCases</div>
            <div class="morebtn">更多></div>
        </div>
        <div class="maininfo">
            <div class="maininfo-item">
                <div class="item-left">
                    <div class="item-head">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534929646526&di=ecba1ec68fbc7694996fc67d9f51c048&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20120710%2FImg347809579.jpg">
                    </div>
                    <div class="item-empty">

                    </div>
                </div>
                <div class="item-right">
                    <h5>为名密歇根12级大学北京学生</h5>
                    <p>
                        当夫妇之间开始据理力争时，家里便开始布上阴影。两人都会不自觉地各抱一堆面目全非的歪理，
                        敌视对方，伤害对方，最后只能两败俱伤，难以收拾.多少夫妻，为了表面的一个〔理〕,落得负心无情.他们不知道，
                        家不是讲理的地方,不是算帐的地方。那么，何为〔家〕，家是什么地方？萍儿，我们年轻的时候，也回答不了这个问题,也像许多夫妻那样，
                        为一点小事争闹不休。那一年为了你小叔的调动问题，我和你妈大吵了一场，甚至闹到要离婚的地步。只是在那个时代我们还缺乏勇气
                    </p>
                    
                </div>
            </div>
               <div class="maininfo-item">
                <div class="item-left">
                    <div class="item-head">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534929646526&di=ecba1ec68fbc7694996fc67d9f51c048&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20120710%2FImg347809579.jpg">
                    </div>
                    <div class="item-empty">

                    </div>
                </div>
                <div class="item-right">
                    <h5>为名密歇根12级大学北京学生</h5>
                    <p>
                        当夫妇之间开始据理力争时，家里便开始布上阴影。两人都会不自觉地各抱一堆面目全非的歪理，
                        敌视对方，伤害对方，最后只能两败俱伤，难以收拾.多少夫妻，为了表面的一个〔理〕,落得负心无情.他们不知道，
                        家不是讲理的地方,不是算帐的地方。那么，何为〔家〕，家是什么地方？萍儿，我们年轻的时候，也回答不了这个问题,也像许多夫妻那样，
                        为一点小事争闹不休。那一年为了你小叔的调动问题，我和你妈大吵了一场，甚至闹到要离婚的地步。只是在那个时代我们还缺乏勇气
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.showcases {
  .title {
    height: 50px;
    line-height: 50px;
    background-color:  rgb(79,93,110);;
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
      border: 1px solid rgba(0,0,0,0.1);
      padding-bottom:20px;
      padding-top: 20px;
      padding-right: 10px;
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item-left{
          width:40%;
          .item-head{
              height: 50%;
              text-align: center;
              img{
                  border-radius: 50%;
                  max-height: 80%;
                  max-width: 80%;;
              }
          }
          .item-empty{
              height: 50%;
          }
      }
      .item-right{
          width: 60%;
          p{
              font-size: 2rem;
              color: rgba(0,0,0,0.5);
          }
          h5{
              margin-bottom: 5px;
          }
      }
    }
  }
}
</style>

