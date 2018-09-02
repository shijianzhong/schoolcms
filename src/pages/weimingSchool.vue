<template>
    <div class="weiming">
        <header-search title="为明国际校区分布" class="headersearch"></header-search>
        <div class="mainimg">
            <img src="../assets/weiming/main.png">
        </div>
        <weiming-schools></weiming-schools>
    </div>
</template>
<script>

import headerSearch from '@/components/headerSearch'
import weimingSchools from '@/components/weimingSchools'
import {getlistSort} from '../api'
export default {
  components: {
    headerSearch,
    weimingSchools
  },
  data() {
    return {

    };
  },
  created(){

  },
  methods: {
  }
};
</script>
<style lang="less">
    .weiming{
        position: relative;
        margin-top: 45px;
        font-size: 17px;
        .headersearch{
            position: absolute;
            width: 100%;
            z-index: 2;
            top:0px;
        }
        .mainimg{
            img{
                width: 100%;
                display: block;
            }
        }
        
    }
</style>

