<template>
    <div class="internat">
        <div class="title">
            <div class="titlename"><span style="border-left:5px solid red;margin-right:5px"></span>为明国际动态</div>
            <div class="morebtn">更多></div>
        </div>
        <div class="maininfo">
            <div class="item">
                <div class="item-left">
                    <div>【贴士】关于签证那些事儿</div>
                    <div>2018-08-25</div>
                </div>
                <div class="item-right"></div>
            </div>
    
        </div>
    </div>
</template>
<style lang="less">
    .internat{
        .title{
            height: 50px;
            line-height: 50px;
            background-color: gray;
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
                .item-left{
                    width: 65%;
                }
                .item-right{
                    width: 35%;
                }
            }
            
        }
    }
</style>

