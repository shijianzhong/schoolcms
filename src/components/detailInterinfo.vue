<template>
    <div class="detailCon">
        <div class="detailCon_title">
            <h1>{{item.title}}</h1>
        </div>
        <div class="detailCon_author">{{item.pbauthor}}<span>{{ptime}}</span></div>
        <div class="detailCon_content">
            <div v-html="item.content"></div>
        </div>
    </div>
</template>
<script>
import { SelectInterDynamics ,UpdateInterDynamicsReadtimes} from "../api";
export default {
    data(){
        return{
            item:{},
            
        }
    },
    computed:{
        ptime(){
            return this.$route.query.item.pbtime.split('T')[0];
        }
    },
    props:['item'],
    mounted(){
        debugger;
        this.item= this.$route.query.item;
        UpdateInterDynamicsReadtimes({id:this.item.id}).then(data=>{
            debugger
        })
    }
}
</script>
<style lang="less">
    .detailCon{
        width: 80%;
        margin: 50px auto;
        .detailCon_title{
            font-size: 14px;
            text-align: center
        }
        .detailCon_author{
            span{
                margin-left: 10px;
            }
        }
        .detailCon_content{
            img{
                width: 100%;
            }
        }
    }
</style>


