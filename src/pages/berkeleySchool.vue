<template>
    <div class="berkeley">
        <header-search class="headersearch"></header-search>
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

