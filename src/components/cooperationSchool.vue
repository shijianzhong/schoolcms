<template>
    <div class="cooperation">
        <div class="title">
            <div class="titlename"><span style="border-left:5px solid red;margin-right:5px"></span>合作院校</div>
            <!-- <div class="morebtn">更多></div> -->
        </div>
        <div class="maininfo">
            <img src="../assets/compschool.png">
        </div>
    </div>
</template>
<style lang="less">
    .cooperation{
        .title{
            height: 50px;
            line-height: 50px;
            background-color: rgb(79,93,110);
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
            display: flex;
            display: -webkit-flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 10px;
            img{
                width: 100%;
                height: 100%;
            }
            
        }
    }
</style>

