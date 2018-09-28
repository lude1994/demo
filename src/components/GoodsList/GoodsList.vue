<template>
    <div class="goodslist">
      <div class="goods" v-for="item in goodsData">
        <img src="../../assets/img/nav1.jpg" alt="">
        <div class="right">
          <div class="fir">
            <div class="firleft">
              <div class="brand">{{item.brand}}</div>
              <h1>{{item.storename}}{{item.place}}</h1>
            </div>
          </div>

          <div class="sec">
            <div class="star">
              <span class="iconfont icon-iconfontxingxing"></span>
              <span class="iconfont icon-iconfontxingxing"></span>
              <span class="iconfont icon-iconfontxingxing"></span>
              <span class="iconfont icon-iconfontxingxing"></span>
              <span class="iconfont icon-iconfontxingxing"></span>
            </div>
            <span class="score">{{item.score}}</span>
            <span>月售{{item.num}}单</span>
          </div>

          <div class="thir">
            <div class="thirleft">
              <span>￥{{item.price}}</span>
              <span>|</span>
              <span>配送费{{item.yunfee}}元</span>
            </div>
            <div class="thirright">
              <span>￥0</span>
              <span>|</span>
              <span>配送费5元</span>
            </div>
          </div>
          <div class="forth">
            <span v-for="val in item.mark">{{val}}</span>
          </div>
          <div class="fifth">
            <div class="fifleft">
              <span>首</span>
              <span>新用户下单立减25元</span>
            </div>
            <div class="fifright">
              <span>{{item.actnum}}个活动</span>
              <span class="iconfont icon-jiantouarrow486"></span>
            </div>
          </div>

          <div class="sixth">
              <span>首</span>
              <span>新用户下单立减{{item.jian3}}元</span>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
      props:["goodsData"]      //接收父组件传来的数据
    }
</script>

<style scoped lang="scss">
.goodslist{
  .goods{
    padding: 22px 10px;
    background: #fff;
    display: flex;
    margin-top: 10px;
    border-bottom: 1px solid #e7e7e7;
    img{
      width: 50px;
      height: 50px;
    }
    .right{
      margin-left: 10px;
      flex: 1;
      .fir{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .firleft{
          display: flex;
          .brand{
            padding: 1px 1px;
            background: #FFED12;
            color: #6F3F15;
            font-size: 12px;
            border-radius: 5px;
            font-weight: bold;
          }
          h1{
            margin-left: 6px;
          }
        }
      }
      .sec{
        display: flex;
        align-items: center;
        color: #333;
        font-size: 13px;
        margin: 10px 0;
        .star{
          display: flex;

          span{
            color: #FFC700;
            font-size: 13px;
          }
        }
        .score{
          margin:0 5px;
        }
      }
      .thir{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        color: #999;

      }
      .forth{
        margin-top: 8px;
        span{
          display: inline-block;
          padding: 2px 3px;
          border: 1px solid #eee;
          font-size: 12px;
          color: #999;
          border-radius: 5px;
          &:nth-child(2){
            margin-left: 4px;
          }
        }
      }
      .fifth{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #999;
        font-size: 12px;
        margin-top: 15px;
        .fifleft{

          span:nth-child(1){
            display: inline-block;
            padding: 1px 3px;
            background: #70BC46;
            font-size: 12px;
            color: #fff;
            border-radius: 2px;
          }
        }
      }
      .sixth{
        font-size: 12px;
        color: #999;
        margin-top: 3px;
        span:nth-child(1){
          display: inline-block;
          padding: 1px 3px;
          background: #F07373;
          font-size: 12px;
          color: #fff;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
