<template>
    <div class="weiming">
        <header-search class="headersearch"></header-search>
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
        margin-top: 45px;
        font-size: 17px;
        .headersearch{
            position: absolute;
            width: 100%;
            z-index: 2
        }
        .mainimg{
            img{
                width: 100%;
            }
        }
        
    }
</style>

