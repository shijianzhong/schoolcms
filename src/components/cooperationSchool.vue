<template>
    <div class="cooperation">
        <div class="title">
            <div class="titlename"><span style="border-left:5px solid red;margin-right:5px"></span>合作院校</div>
            <!-- <div class="morebtn">更多></div> -->
        </div>
        <div class="maininfo">
            <div class="item">张同学被清华大学录取</div>
            <div class="item">张同学被清华大学录取</div>
            <div class="item">张同学被清华大学录取</div>
            <div class="item">张同学被清华大学录取</div>
            <div class="item">张同学被清华大学录取</div>
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
            background-color: green;
            display: flex;
            display: -webkit-flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .item{
                width: 50%;
                text-align: center;
            }
            
        }
    }
</style>

