<template>
    <div class="admitinfo">
        <div class="title">
            <span class="titlename">录取捷报</span>
            <span class="morebtn">更多></span>
        </div>
        <div class="maininfo">
            <span>张同学被清华大学录取</span>
            <span>张同学被清华大学录取</span>
            <span>张同学被清华大学录取</span>
            <span>张同学被清华大学录取</span>
            <span>张同学被清华大学录取</span>
        </div>
    </div>
</template>
<style lang="less">
    .admitinfo{
        .title{
            height: 50px;
            background-color: gray;
            line-height: 50px;
            .titlename{
                float: left;
                margin-left: 25px;
            }
            .titlename::before{
                content: "|";
                color:red;
                font-weight: bold;
                font-size: 20px;
            }
            .morebtn{
                float: right;
                margin-right: 15px;
            }
        }
    }
</style>

