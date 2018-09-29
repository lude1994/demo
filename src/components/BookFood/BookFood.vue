<template>
    <div class="bookfood">
      <img src="../../assets/img/bg1.jpg" alt="" class="img">
      <h2>商家推荐</h2>
      <div class="intro">
        <div class="introli" v-for="item in introFood">
          <img src="../../assets/img/nav1.jpg" alt="">
          <div class="title">{{item.title}}</div>
          <div class="status">月售{{item.salenum}} 好评率{{item.goodrate}}%</div>
          <div class="do">
            <span>￥{{item.price}}起</span>
            <span>+</span>
          </div>
        </div>
      </div>
      <div class="lei">
        <div class="leileft">

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BookFood",
      data(){
          return{
            introFood:[
              {img:"nav1.jpg",title:"扫一扫领10元红包",salenum:0,goodrate:0,price:17.6},
              {img:"nav1.jpg",title:"扫一扫领10元红包",salenum:0,goodrate:0,price:17.6},
              {img:"nav1.jpg",title:"扫一扫领10元红包",salenum:0,goodrate:0,price:17.6},
              {img:"nav1.jpg",title:"扫一扫领10元红包",salenum:0,goodrate:0,price:17.6},
              {img:"nav1.jpg",title:"扫一扫领10元红包",salenum:0,goodrate:0,price:17.6},

            ],   //推荐的菜
        }
      }
    }
</script>

<style scoped lang="scss">
.bookfood{
  padding-bottom: 2vh;
  .img{
    width: 92%;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
  h2{
    margin: 10px 15px;
  }
  .intro{
    overflow-x: auto;
    white-space: nowrap;
    padding-right: 15px;
    .introli{
      display: inline-block;
      margin-left: 15px;
      background: #fff;
      border-radius: 5px 5px 0 0;
      overflow: hidden;
      img{
        width: 32vw;
        height: 32vw;
      }
      .title{
        font-size: .9rem;
        color: #666;
      }
      .status{
        font-size: .6rem;
        color: #999;
      }
      .do{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        span:nth-child(1){
          color: red;
        }
        span:nth-child(2){
          color: #fff;
          display: inline-block;
          padding: 1vw 2vw;
          background: #2395FF;
          font-weight: bold;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
