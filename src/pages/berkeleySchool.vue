<template>
    <div class="berkeley">
        <header-search title="伯克利衔接班" class="headersearch"></header-search>
        <div class="mainimg">
            <img src="../assets/berkeley/main.png">
        </div>
        <berkeley-schools></berkeley-schools>
    </div>
</template>
<script>

import headerSearch from '@/components/headerSearch'
import berkeleySchools from '@/components/berkeleySchools'
import {getlistSort} from '../api'
export default {
  components: {
    headerSearch,
    berkeleySchools
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
    .berkeley{
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

