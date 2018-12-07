<template>
  <div class="homeCon">
    <group>
      <first-page v-if="selected==0"></first-page>
      <active-special v-else-if="selected==1"></active-special>
      <weiming-school v-else-if="selected==2"></weiming-school>
    </group>
    <tabbar class="tabbar" v-model="selected" @on-index-change="indexchange">
      <tabbar-item>
        <img slot="icon" src="../../static/first.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../static/second.png">
        <span slot="label">活动预约</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../static/third.png">
        <span slot="label">为明国际</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../static/tel.png">
        <span slot="label">电话咨询</span>
      </tabbar-item>
      <!-- <tabbar-item>
        <img slot="icon" src="../../static/me.png">
        <span slot="label">我的</span>
      </tabbar-item> -->
    </tabbar>
    <!-- v-transfer-dom -->
    <div>
      <x-dialog :dialog-style="{'max-width': '90%', width: '100%', height: '50%', 'background-color': 'rgba(255,255,255,0.8)'}" v-model="showDialogStyle" hide-on-blur>
        <div class="dialogCon">
          <div class="dialogCon_top">
            为明国际总部电话:
            <span><a href="tel:400-898-1186">400-898-1186</a></span>
          </div>
          <div class="dialogCon_bottom">
            <div class="telItem">
              <div class="telItem-title">
                为明重庆校区电话：
              </div>
              <div class="telItem-tel">
                <a href="tel:023-67469292">023-6746&nbsp;9292</a>
              </div>
            </div>
            <div class="telItem">
              <div class="telItem-title">
                为明广州校区电话：
              </div>
              <div class="telItem-tel">
                <a href="tel:020-84153888">020-8415&nbsp;3888</a>
              </div>
            </div>
            <div class="telItem">
              <div class="telItem-title">
                为明武汉校区电话：
              </div>
              <div class="telItem-tel">
                <a href="tel:027-83376586">027-8337&nbsp;6586</a>
              </div>
            </div>
            <div class="telItem">
              <div class="telItem-title">
                为明贵阳校区电话：
              </div>
              <div class="telItem-tel">
                <a href="tel:0851-86404001">0851-8640&nbsp;4001</a>
              </div>
            </div>
            <div class="telItem">
              <div class="telItem-title">
                为明深圳校区电话：
              </div>
              <div class="telItem-tel">
                <a href="tel:0755-26499700">0755-2649&nbsp;9700</a>
              </div>
            </div>
            <div class="telItem">
              <div class="telItem-title">
                为明青岛校区电话：
              </div>
              <div class="telItem-tel">
                <a href="tel:0532-86767766">0532-8676&nbsp;7766</a>
              </div>
            </div>
          </div>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import {
  Tabbar,
  TabbarItem,
  Group,
  Cell,
  XDialog,
  XButton,
  XSwitch,
  TransferDomDirective as TransferDom
} from "vux";
import firstPage from "./firstPage";
import weimingSchool from "./weimingSchool.vue";
import activeSpecial from "./activespecial.vue";
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    firstPage,
    weimingSchool,
    activeSpecial,
    XDialog,
    XButton,
    XSwitch
  },
  watch: {
    selected(newval, oldval) {
      console.log(newval);
    }
  },
  data() {
    return {
      selected: 0,
      showDialogStyle: false
    };
  },
  methods: {
    indexchange(val) {
      if (val == 3) {
        this.showDialogStyle = true;
        this.selected = 0;
      }
    }
  }
};
</script>

<style lang="less">
.dialogCon {
  padding: 20px 20px 20px 25px;
  .dialogCon_top {
    font-size: 17px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding-bottom: 15px;
    span {
      a {
        color: rgb(117, 86, 12);
      }
    }
  }
  .dialogCon_bottom {
    .telItem {
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      margin-top: 20px;
      font-size: 13px;
      .telItem-title {
        
      }
      .telItem-tel {
        color: rgb(117, 86, 12);
        a {
          color: rgb(117, 86, 12);
        }
      }
    }
  }
}
.homeCon {
  margin-top: 45px;
  .tabbar {
    position: fixed;
  }
}
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>


