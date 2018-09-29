<template>
    <div class="tabbar">
      <div class="tabli">
        <span class="iconfont icon-changyonglogo40"></span>
        <span>首页</span>
      </div>
      <div class="tabli">
        <span class="iconfont icon-faxian"></span>
        <span>发现</span>
      </div>
      <div class="tabli">
        <span class="iconfont icon-dingdan1"></span>
        <span>订单</span>
      </div>
      <div class="tabli">
        <span class="iconfont icon-wode1"></span>
        <span>我的</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped lang="scss">
  .tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    height: 16vw;
    border-top: 1px solid #eee;
    .tabli{
      display: flex;
      flex-direction: column;
      text-align: center;
      span:nth-child(1){
        font-size: 1.3rem;
        color: #999;
      }
      span:nth-child(2){
        font-size: 12px;
        display: inline-block;
        margin-top: 2px;
        color: #999;
      }
    }
  }
</style>
