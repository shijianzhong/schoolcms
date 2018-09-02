<template>
    <div class="headerSearch">
        <span><h3>{{title}}</h3></span>

    </div>
</template>
<script>
import { Search } from 'vux'

export default {
  components: {
    Search
  },
  props:['title']
}
</script>
<style lang="less">
    .headerSearch{
        height: 50px;
        background-color: rgba(190,190,190,0.6);
        line-height: 50px;
        text-align:center;
    }
</style>


