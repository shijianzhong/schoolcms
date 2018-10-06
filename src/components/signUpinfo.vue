<template>
    <div class="signupinfo">
        <div class="title">
            <div class="titlename">
                <span style="border-left:5px solid red;margin-right:5px"></span>{{title}}</div>
        </div>
        <div class="maininfo">
            <div class="tel">
                <div class="tel-left">
                    <div>全国报名</div>
                    <div>咨询电话</div>
                </div>
                <div class="tel-right">
                    <span></span>400-8981186
                </div>
            </div>
            <div class="item">
                <div class="desc">
                    所在地区
                </div>
                <div class="iteminput">
                    <input type="text" v-model="address">
                    <!-- <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select> -->
                </div>
            </div>
            <div class="item">
                <div class="desc">
                    所在年级
                </div>
                <div class="iteminput">
                    <input type="text" v-model="age">
                </div>
            </div>
            <div class="item">
                <div class="desc">
                    家长姓名
                </div>
                <div class="iteminput">
                    <input type="text" v-model="name">
                </div>
            </div>
            <div class="item">
                <div class="desc">
                    联系电话
                </div>
                <div class="iteminput">
                    <input type="text" v-model="tel">
                </div>
            </div>
            <x-button class="xbtn" type="primary" @click.native="submitInfo">提交</x-button>
            <alert v-model="show" title="提示">提交成功</alert>
        </div>
    </div>
</template>
<script>
import { Selector ,Alert, XButton} from "vux";
import { InsertSignUpInfo } from "../api";
export default {
  props: ["title"],
  data() {
    return {
      list: [{ key: "gd", value: "广东" }, { key: "gx", value: "广西" }],
      address:'',
      tel:'',
      age:'',
      name:'',
      show:false,
    };
  },
  components: { Selector,XButton,Alert },
  methods: {
      submitInfo(){
          InsertSignUpInfo({
              title:this.title,
              address:this.address,
              age:this.age,
              name:this.name,
              tel:this.tel
          }).then(data=>{
              if(data.success){
                  this.show=true;
              }
          })
      }
  }
};
</script>

<style lang="less">
.signupinfo {
  .title {
    height: 50px;
    line-height: 50px;
    background-color: rgb(79, 93, 110);
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    .titlename {
      float: left;
      margin-left: 25px;
      h1 {
        color: red;
      }
    }

    .morebtn {
      float: right;
      margin-right: 15px;
    }
  }
  .maininfo {
    padding: 50px 20px 10px 20px;
    .xbtn{
        margin-top:20px;
    }
    .tel {
      display: flex;
      display: -webkit-flex;
      margin-bottom: 20px;
      .tel-right {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        font-size: 30px;
        span {
          border-left: 2px solid black;
          height: 100%;
          width: 2px;
          margin: 0px 20px;
        }
      }
    }
    .item {
      display: flex;
      display: -webkit-flex;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      height: 40px;
      line-height: 40px;
      justify-content: space-between;
      position: relative;
      margin-top: 10px;
      .desc {
        width: 100px;
        text-align: center;
      }
      .iteminput {
        position: absolute;
        left: 100px;
        right: 0px;
        height: 40px;
        select {
          width: 100%;
          height: 100%;
          background-color: transparent;
          border: 0px;
        }
        input {
          width: 100%;
          height: 100%;
          background-color: transparent;
          border: 0px;
        }
      }
    }
  }
}
</style>

