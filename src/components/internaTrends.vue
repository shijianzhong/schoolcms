<template>
    <div class="internat">
        <div class="title">
            <div class="titlename"><span style="border-left:5px solid red;margin-right:5px"></span>为明国际动态</div>
            <div class="morebtn">更多></div>
        </div>
        <div class="maininfo">
            <div class="item">
                <div class="item-left">
                    <h5 class="subject">【贴士】关于签证那些事儿</h5>
                    <div class="info">
                        <span>2018-08-25</span>
                        <span>阅读68人</span>
                    </div>
                </div>
                <div class="item-right">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535255625454&di=86375646309d75d1583ff695f0c1d34d&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160730%2F0020033008993110_b.jpg">
                </div>
            </div>
              <div class="item">
                <div class="item-left">
                    <h5 class="subject">【贴士】关于签证那些事儿</h5>
                    <div class="info">
                        <span>2018-08-25</span>
                        <span>阅读68人</span>
                    </div>
                </div>
                <div class="item-right">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535255625454&di=86375646309d75d1583ff695f0c1d34d&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160730%2F0020033008993110_b.jpg">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .internat{
        .title{
            height: 50px;
            line-height: 50px;
            background-color:  rgb(79,93,110);;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            .titlename{
                float: left;
                margin-left: 25px;
                h1{
                    color: red;
                }
            }
        
            .morebtn{
                float: right;
                margin-right: 15px;
            }
        }
        .maininfo{
   
            .item{
                display: flex;
                display: -webkit-flex;
                height: 10rem;;
                padding: 10px 0px;
                border: 1px solid rgba(0,0,0,0.1);
                .item-left{
                    width: 65%;
                    .subject{
                        height: 5rem;
                        line-height: 5rem;
                        text-align: center;
                    }
                    .info{
                        height: 5rem;
                        display: flex;
                        display: -webkit-flex;
                        justify-content: space-around;   
                        color: rgba(0,0,0,0.5);    
                        font-size: 2rem;
                    }
                    
                }
                .item-right{
                    width: 35%;
                    img{
                        max-width: 75%;
                    }
                }
            }
            
        }
    }
</style>

