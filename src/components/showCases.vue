<template>
    <div class="showcases">
        <div class="title">
            <div class="titlename">
                <span style="color:red">|</span>ShowCases</div>
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
                    sdfaaffafafa
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
    background-color: gray;
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
      border:1px solid yellow;
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item-left{
          border: 1px solid red;
          .item-head{
              height: 50%;
              border:5px solid red;
              border-radius: 50%;
              img{
                  height: 100%;
                  border-radius: 50%;
              }
          }
          .item-empty{
              height: 50%;
          }
      }
      .item-right{
          border: 1px solid green;
      }
    }
  }
}
</style>

