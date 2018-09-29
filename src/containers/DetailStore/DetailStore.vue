<template>
    <div class="detailstore">
      <div class="header">
        <div class="caozuo">
          <span class="iconfont icon-sousuo"></span>
          <span>拼</span>
          <span>::</span>
        </div>
        <img src="../../assets/img/nav1.jpg" alt="">
        <div class="love"><span class="iconfont icon-shoucang"></span></div>
      </div>
      <div class="storebox">
        <h1>来相会饺子宴（六里桥店）</h1>
        <div class="detail">
          <span>评价4.8</span>
          <span>月售2018单</span>
          <span>蜂鸟转送约23分钟</span>
        </div>
        <div class="quan">
          <span class="money">￥4</span>
          <div class="tiaojian">
            <span class="iconfont icon-huangguan"></span>
            <span>无门槛</span>
          </div>
          <span class="get">领取</span>
        </div>
        <div class="hui" v-show="ishow">
          <div class="fir">
            <div class="manjian">
              <span>满减</span>
              <span>满10减5，满40减15，满70减25</span>
            </div>
            <transition name="slider">
              <div class="morehui" @click="iWatch" name="slider">
              <span>5个优惠</span>
              <span class="iconfont icon-jiantouarrow486"></span>
            </div>
            </transition>
          </div>
          <div class="sec">
            <span>公告：如在用餐过程中遇到任何问题，1111111111-----11将</span>
          </div>
        </div>
        <transition name="fade">
          <div class="yinc" v-show="isWatch" name="fade">

          <div class="textbox">
            <div class="upup" @click="upup">^</div>
            <h2>优惠</h2>
            <div class="yincbox">
              <div class="xunbox">
                <span>满减</span>
                <span>满25减18，满40减21，满60减31，满100减50</span>
              </div>
            </div>
          </div>
          <div class="textbox">
            <h2>服务</h2>
            <div class="yincbox">
              <div class="xunbox">
                <span>满减</span>
                <span>满25减18，满40减21，满60减31，满100减50</span>
              </div>
            </div>
          </div>
          <div class="textbox">
            <h2>公告</h2>
            <span class="gonggao">[本店开票据200元气，不满科雷嘉]。欢迎点餐，如遇温和问题，欢迎致电111111111.谢谢您的关顾</span>
          </div>
        </div>
        </transition>
      </div>
      <div class="navbar">
        <nav-bar></nav-bar>
      </div>

    </div>
</template>

<script>
  import NavBar from '../../components/NavBar/NavBar'
    export default {
        name: "DetailStore",
      components:{NavBar},
      data(){
          return{
            moreDetail:[
              // {name:""}
            ],      //优惠项
            isWatch:false,    //是否显示优惠项
            ishow:true,       //显示优惠了
          }
      },
      methods:{
          iWatch(){
            this.isWatch = !this.isWatch
            if(this.isWatch===true){
              this.ishow = false
            }else{
              this.ishow = true
            }

        },
        upup(){   //隐藏优惠项
          this.isWatch = false;
          this.ishow = true
        }
      }
    }
</script>

<style scoped lang="scss">
.detailstore{
  .header{
    height: 15vh;
    background: url("../../assets/img/bg2.jpg") no-repeat;
    background-size: 100%;
    position: relative;
    .caozuo{
      /*height: 15vw;*/
      line-height: 20vw;
      /*background: green;*/
      text-align: right;
      padding-right: 20px;
      span:nth-child(1){
        font-size: 1.9rem;
        color: #fff;
        vertical-align: middle;
      }
      span:nth-child(2){
        /*display: inline-block;*/
        border: 1px solid #fff;
        border-radius: 50%;
        padding: 1px 3px;
        font-size: 1rem;
        color: #fff;
        margin: 0 10px;
      }
      span:nth-child(3){
        color: #fff;
        font-size: 1.3rem;
      }
    }
    img{
      width: 90px;
      height: 90px;
      position: absolute;
      top: 5vh;
      left: 50%;
      margin-left: -50px;
    }
    .love{
      width: 30px;
      height: 30px;
      background: #fff;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      position: absolute;
      right: 2vw;
      top: 12.5vh;
      box-shadow: 0 0 10px #eee inset;
      span{
        color: red;
      }
    }
  }
  .storebox{
    width: 90%;
    margin: 0 auto;
    margin-top: 12vw;
    /*border-bottom: 1px solid #F6F6F6;*/
    h1{
      font-size: 1.3rem;
      text-align: center;
    }
    .detail{
      font-size: 0.7rem;
      color: #666;
      text-align: center;
      margin: 3vw 0;
      span:nth-child(2){
        margin: 0 10px;
      }
    }
    .quan{
      width: 42vw;
      padding: 0 0;
      /*background: gold;*/
      font-size: .8rem;
      display: flex;
      align-items: center;
      margin: 0 auto;

      .money{
        font-weight: bold;
        font-size: .9rem;
        margin-left: 3vw;
        background: gold;
        padding: .8vw 2vw;
      }
      .tiaojian{
        /*margin: 0 2px;*/
        background: gold;
        padding: 1vw 0;
        padding-right: 4vw;
        white-space: nowrap;
        border-radius: 0 5px 5px 0;
      }
      .get{
        display: inline-block;
        background: gold;
        padding: 1vw 1vw;
        border-radius: 5px 0 0 5px;
        white-space: nowrap;
      }
    }
    .hui{
      margin: 0 auto;
      .fir{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .manjian{
          font-size: .7rem;
          margin: 10px 0;
          span:nth-child(1){
            display: inline-block;
            padding: 1px 2px;
            border: 1px solid #eee;
            background: rgba(243,85,27,.2);
            font-size: .7rem;
            color: #DB5A5A;
            border-radius: 5px;
          }
          span:nth-child(2){
            color: #333;
            margin-left: 2vw;
          }
        }
        .morehui{
          font-size: 0.6rem;
          color: #666;
          span:nth-child(2){
            font-size: .6rem;
          }
        }
      }
      .sec{
        color: #999;
        font-size: .8rem;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .slider-enter-active, .slider-leave-active { transition: opacity .2s }
    .slider-enter, .slider-leave-to{ opacity: 0; }
    .fade-enter-active, .fade-leave-active { transition: opacity .1s }
    .fade-enter, .fade-leave-to{ opacity: 0; }
    .yinc{
      /*width: 99%;*/
      position: relative;
      margin: 0 auto;
      margin-top: 10px;

      .textbox{
        .upup{
          position: absolute;
          font-size: 1.5rem;
          right: 0;
        }
        &:nth-child(2){
          margin: 20px 0;
        }
        &:nth-child(3){
          .gonggao{
            color: #666;
            font-size: .7rem;
            margin-top: 10px;
            display: inline-block;
          }
        }
        .yincbox{
          .xunbox{
            margin-top: 10px;
            span:nth-child(1){
              display: inline-block;
              padding: .5px 2px;
              font-size: .7rem;
              color: #F6622A;
              border: 1px solid #F6622A;
              border-radius: 3px;
            }
            span:nth-child(2){
              font-size: .7rem;
              color: #666;
              margin-left: 3px;
            }
          }
        }
      }

    }

  }


}
</style>
