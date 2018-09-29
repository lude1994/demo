<template>
    <div class="search">
      <div class="header">
        <span @click="goBack"><</span>
        <div class="searchbox">
          <span class="iconfont icon-sousuo"></span>
          <input type="text" placeholder="输入商家、商品名称" v-model="inputValue" @change="changeSearch">
        </div>
        <span @click="searchGo">搜索</span>
      </div>
      <h1 v-show="isHis">历史搜索</h1>
      <div class="searchbar" v-show="isHis">
        <div v-for="item in searchHistory" class="barli">{{item}}</div>
      </div>
      <h1>热门搜索</h1>
      <div class="searchbar">
        <div v-for="item in searchbar" class="barli" @click="clickSearBar(item)">{{item}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
      data(){
          return{
            searchbar:["披萨","香锅","麦当劳","哈哈镜","煎饼","蔬菜","豆腐脑","鲍师傅","蛋糕","炸糕"],  //热门搜索标签
            searchHistory:[],   //历史搜索
            isHis:false,        //是否显示历史记录
            inputValue:"",      //输入框为空，默认
          }
      },
      methods:{
        searchGo(){
          if(!this.inputValue){
            this.$toast('请输入搜索内容');
          }else{
            this.searchHistory.push(this.inputValue);
            this.inputValue = ""
            this.isHis = true
          }


        },
        goBack(){
          this.$router.push({path:"/"})
        },
        clickSearBar(item){
          this.inputValue = item      //将点击的放在搜索框中
        },
        changeSearch(){
          console.log(this.inputValue,'搜索了什么')
        }
      },
      mounted(){
          if(this.searchHistory.length===0){
            this.isHis = false
          }else{
            this.isHis = true
          }
      }
    }
</script>

<style scoped lang="scss">
  .search{
    .header{
      height: 14vw;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span:nth-child(1){
        margin: 0 12px;
      }
      span:nth-child(3){
        margin: 0 12px;
        font-weight: bold;
      }
      .searchbox{
        height: 8vw;
        background: #F8F8F8;
        flex: 1;
        display: flex;
        align-items: center;
        span{
          font-size: 1.3rem;
        }
        input{
          width: 80%;
          outline: none;
          border: none;
          background: transparent;
          font-size: 13px;
        }
      }
    }
    h1{
      margin-left: 15px;
    }
    .searchbar{
      margin-top: 15px;
      margin-bottom: 15px;
      display: flex;
      flex-wrap: wrap;
      .barli{
        padding: 10px 8px;
        /*width: 10vw;*/
        background: #F7F7F7;
        font-size: .9rem;
        margin-left: 20px;
        margin-top: 10px;
        color: #666;

      }
    }
  }
</style>
