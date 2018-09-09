<template>
    <div class="cooperatehigh">
        <header-search title="中美高中联合培养项目" class="headersearch"></header-search>
        <div class="mainimg">
            <img src="../assets/berkeley/main.png">
        </div>
        <cooperate-highinfo></cooperate-highinfo>
    </div>
</template>
<script>

import headerSearch from '@/components/headerSearch'
import cooperateHighinfo from '@/components/cooperateHighinfo'

import {getlistSort} from '../api'
export default {
  components: {
    headerSearch,
    cooperateHighinfo
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
    .cooperatehigh{
        margin-top: 45px;
        font-size: 17px;
        position: relative;
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

