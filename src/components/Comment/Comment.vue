<template>
    <div class="comment">
      <div class="score">
        <div class="left">
          <h1>4.7</h1>
          <div class="pingfen">
            <span>商家评分</span>
            <div class="star">
              <span class="iconfont icon-iconfontxingxing"></span>
              <span class="iconfont icon-iconfontxingxing"></span>
              <span class="iconfont icon-iconfontxingxing"></span>
              <span class="iconfont icon-iconfontxingxing"></span>
              <span class="iconfont icon-iconfontxingxing"></span>
            </div>
          </div>
            <div class="info">
              <span>味道</span>
              <span>4.4</span>
            </div>
            <div class="info">
              <span>包装</span>
              <span>4.5</span>
            </div>
          </div>
        <div class="right">
          <div class="info">
            <span>配送</span>
            <span>4.5</span>
          </div>
        </div>
        </div>
      <div class="line"></div>
      <div class="content">
        <div class="concen">
          <div class="commentbox">
            <div class="boxli"  v-for="item in commentMark">{{item.title}}{{item.num}}</div>
          </div>
          <div class="linetrue">
            <input type="checkbox">
            <span>只看有内容的评价</span>
          </div>
        </div>
      </div>

      </div>
</template>

<script>
    export default {
        name: "Comment",
      data(){
          return{
            commentMark:[
              {title:"全部",num:2161,blue:true},
              {title:"满意",num:2161,blue:true},
              {title:"不满意",num:2161,blue:false},
              {title:"有图",num:2161,blue:true},
              {title:"味道好",num:2161,blue:true},
              {title:"不好吃",num:2161,blue:false},
              {title:"分量一般",num:2161,blue:false},

            ], //标签
          }
      }
    }
</script>

<style scoped lang="scss">
.comment{
  .score{
    margin-bottom: 2vh;
    margin-top: 10px;
    display: flex;
    padding: 15px 0;
    .left{
      display: flex;
      width: 70%;
      justify-content: space-between;
      border-right: 1px solid #EEEEEE;
      padding-right: 7vw;
      h1{
        font-size: 2.2rem;
        font-weight: normal;
        color: #ff6000;
        margin-left: 4vw;
      }
      .pingfen{
        span{
          font-size: .7rem;
        }
        .star{
          display: flex;
          margin-top: 2px;
          span{
            color: #FFB300;
          }
        }

      }
      .info{
        display: flex;
        flex-direction: column;
        text-align: center;
        color: #333;
        span:nth-child(1){
          font-size: .7rem;
        }
        span:nth-child(2){
          font-size: 1.2rem;
        }
      }
    }
    .right{
      padding-left: 7vw;
      .info{
          display: flex;
          flex-direction: column;
          text-align: center;
          color: #333;
          span:nth-child(1){
            font-size: .7rem;
          }
          span:nth-child(2){
            font-size: 1.2rem;
          }
        }
    }
  }
  .line{
    height: 2vw;
    background: #F5F5F5;
  }
  .content{

    .concen{
      width: 90%;
      margin: 0 auto;

      .commentbox{
        display: flex;
        flex-wrap: wrap;
        font-size: .8rem;
        margin-bottom: 4vw;
        .boxli{
          margin-left: 10px;
          white-space: nowrap;
          margin-top: 10px;
          background: red;
          padding: 1vw 2vw;
          background: #EBF5FF;
          color: #666;
        }
      }
      .linetrue{
        width: 90%;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding: 4vw 0;
        margin: 0 auto;
        input{
          margin-left: 2vw;
          vertical-align: middle;
        }
        span{
          font-size: .9rem;
        }
      }

    }
  }

}
</style>
