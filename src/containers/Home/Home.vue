<template>
  <div class="home">
    <div class="up">
      <div class="header">
        <div class="place" v-show="topNow">
          <span class="iconfont icon-diliweizhi"></span>
          <span>北京西站</span>
          <span class="iconfont icon-jiantouarrow486"></span>
        </div>
        <div class="search">
          <span class="iconfont icon-sousuo"></span>
          <span>搜索饿了么商家、商品名称</span>
        </div>
      </div>
      <div class="playnav" v-show="isUp">
        <mt-swipe :auto="0">
          <mt-swipe-item v-for="item in navliData">
            <div class="nav">
              <div class="navli" v-for="val in item.li">
                <img src="../../assets/img/nav1.jpg" alt="">
                <span>{{val.title}}</span>
              </div>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="intro" v-show="isUp">
        <div class="left" v-for="item in introData">
          <h2>{{item.name}}</h2>
          <span class="title">{{item.title}}</span>
          <div class="go"><span>{{item.num}}</span><span class="status">{{item.status}} ></span></div>
          <img src="../../assets/img/nav1.jpg" alt="">
        </div>
      </div>
      <div class="playadv" v-show="isUp">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in advData">
            <div><img src="../../assets/img/nav1.jpg" alt=""></div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="titleS" v-show="isUp">
        推荐商家
      </div>
      <div class="navfour">
        <transition name="fade">
          <div class="selsort" v-show="isClickSort" transition="fade">
            <div v-for="item in sortData" class="itemlist" @click="sel(item)">{{item}}</div>
          </div>
        </transition>
        <transition name="slider">
          <div class="shaixuan" v-show="isClickShai" transition="slider">
            <div class="shai" >
              <div class="shaidiv" v-for="(item,index) in selData">
                <span>{{item.name}}</span>
                <div class="moresel">
                  <div :class="selli?'selli':' bgColor'" v-for="(val,i) in item.li"  @click="selTo(i,index,$event)">
                    <!--<img src="../../assets/img/nav1.jpg" alt="">-->
                    <span>{{val.title}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="doit">
              <div class="clear" :style="{color:isnosel}">清空</div>
              <div class="do" @click="makeSure">确定</div>
            </div>
          </div>
        </transition>
        <div class="fourli" @click="selClick">
          <span>{{selWitch}}</span>
          <i class="iconfont icon-jiantouarrow486"></i>
        </div>
        <div class="fourli">
          <span>距离最近</span>
        </div>
        <div class="fourli">
          <span>品质联盟</span>
        </div>
        <div class="fourli" @click="shai">
          <span>筛选</span>
          <i class="iconfont icon-shaixuan"></i>
        </div>
      </div>
      <div class="box">
        <div class="shadow" v-show="isClickSort?isClickSort:isClickShai" :style="{height:heightbox}"></div>
        <goods-list :goodsData="goodsData"></goods-list>
      </div>

    </div>
  </div>
</template>

<script>
  import GoodsList from '../../components/GoodsList/GoodsList.vue';
    export default {
        name: "Home",
      data(){
          return{
            topNow:true,    //默认显示地理位置的，只有在往下走的时候就会隐藏
            navliData:[
              {name:"first",li:[
                  {title:"美食",img:"../../assets/img/nav1.jpg"},
                  {title:"美食",img:"../../assets/img/nav1.jpg"},
                  {title:"美食",img:"../../assets/img/nav1.jpg"},
                  {title:"美食",img:"../../assets/img/nav1.jpg"},
                  {title:"美食",img:"../../assets/img/nav1.jpg"},
                  {title:"美食",img:"../../assets/img/nav1.jpg"},
                  {title:"美食",img:"../../assets/img/nav1.jpg"},
                  {title:"美食",img:"../../assets/img/nav1.jpg"},
                  {title:"美食",img:"../../assets/img/nav1.jpg"},
                  {title:"美食",img:"../../assets/img/nav1.jpg"},
                ]},
              {name:"sec",li:[
                  {title:"嘿嘿",img:"../../assets/img/nav1.jpg"},
                ]},
            ],       //轮播导航
            introData:[
              {name:"品质套餐",title:"搭配齐全吃得好",status:"立即抢购",img:"../../assets/img/nav1.jpg"},
              {name:"限量抢购",title:"超值美味9.9元起",num:"11197人",status:"正在抢",img:"../../assets/img/nav1.jpg"},
            ],            //推荐
            advData:["../../assets/img/nav1.jpg","../../assets/img/nav1.jpg","../../assets/img/nav1.jpg"],
            isClickSort:false,    //综合排行下拉列表默认不显示
            sortData:["综合排行","好评优先","销量最高","起送价最低","配送最快","配送费最低","人均从低到高","人均从高到低"],
            isUp:true,    //点击综合排行和筛选时导航置顶，不需要的隐藏
            heightbox:73 + 'vh',    //显示的黑色背景的高度
            selWitch:"综合排行",    //默认综合排行再点击进行选择
            isClickShai:false,       //筛选选择
            selData:[
              {name:"商家服务（可多选）",li:[
                  {title:"蜂鸟转送"},
                  {title:"品牌商家"},
                  {title:"食安保"},
                  {title:"新店"},
                  {title:"开发票"}
                ]},
              {name:"优惠活动（可单选）",li:[
                  {title:"新用户优惠"},
                  {title:"特价商品"},
                  {title:"下单立减"},
                  {title:"赠品优惠"},
                  {title:"下单返红包"},
                  {title:"进店领红包"}
                ]},
              {name:"人均消费",li:[
                  {title:"￥20以下"},
                  {title:"￥20-￥40"},
                  {title:"￥40-￥60"},
                  {title:"￥60-￥80"},
                  {title:"￥80-￥100"},
                  {title:"￥100以上"}
                ]},
            ],             //筛选中的内容
            isnosel:"#eee",   //没有选择的情况下无法清空，给个淡色
            selli:true,       //默认不选中--我筛选
            bgColor:false,    //默认不选中--我筛选
            goodsData:[
              {
                img:"nav1.jpg",brand:"品牌",storename:"麻辣香锅",place:"(北京西站店)",score:"4.5",num:226,price:45,yunfee:9,distance:"1.82km",time:41,mark:["火锅鱼","品质联盟"],man1:80,man2:120,man3:150,jian1:23,jian2:30,jian3:40,actnum:14
              },
              {
                img:"nav1.jpg",brand:"品牌",storename:"麻辣香锅",place:"(北京西站店)",score:"4.5",num:226,price:45,yunfee:9,distance:"1.82km",time:41,mark:["火锅鱼","品质联盟"],man1:80,man2:120,man3:150,jian1:23,jian2:30,jian3:40,actnum:14
              },
              {
                img:"nav1.jpg",brand:"品牌",storename:"麻辣香锅",place:"(北京西站店)",score:"4.5",num:226,price:45,yunfee:9,distance:"1.82km",time:41,mark:["火锅鱼","品质联盟"],man1:80,man2:120,man3:150,jian1:23,jian2:30,jian3:40,actnum:14
              },
              {
                img:"nav1.jpg",brand:"品牌",storename:"麻辣香锅",place:"(北京西站店)",score:"4.5",num:226,price:45,yunfee:9,distance:"1.82km",time:41,mark:["火锅鱼","品质联盟"],man1:80,man2:120,man3:150,jian1:23,jian2:30,jian3:40,actnum:14
              },{
                img:"nav1.jpg",brand:"品牌",storename:"麻辣香锅",place:"(北京西站店)",score:"4.5",num:226,price:45,yunfee:9,distance:"1.82km",time:41,mark:["火锅鱼","品质联盟"],man1:80,man2:120,man3:150,jian1:23,jian2:30,jian3:40,actnum:14
              }

            ],     //传给子元素的商品商店数据

          }
      },
      methods:{
        //  选择打开
        selClick(){
          this.isClickSort = !this.isClickSort
          this.isUp = false;      //隐藏不需要的dom
          this.topNow = false     //置顶隐藏地址
          this.isClickShai = false
        //  判断当前selWitch选中的，给他加上一个选中的样式
          if(this.isClickSort === true){

          }
        },
      //  点击选择
        sel(item){
          this.selWitch = item;
          this.isClickSort = false
          this.isClickShai = false
        },
      //  筛选
        shai(){
          this.isClickShai = !this.isClickShai
          this.isClickSort = false
        },
      //  点击选中的加上相应的标志--筛选中
        selTo(i,index,e){
          // i,index,$event,分别是小数组的索引，大数组的索引，传的事件e
          // console.log(i,index,e)
          // if(e.currentTarget){
          //   this.selColor = "red"
          // }
          this.bgColor = !this.bgColor;
          console.log(this.bgColor)
          //判断是哪个状态--选择还是未选择
          if(!this.bgColor){
            e.currentTarget.className = "selli"
            console.log('选择了')
          }else{
            e.currentTarget.className = "bgColor"
            console.log('没写')
          }

          // console.log(e.target.parentNode.className,'11');
          // console.log(e.target);
          // if(e.target.parentNode.className=="selli"){
          //   e.target.classList.toggle("selBg");
          // }
        //  思路，在同个数据中，索引为0的可以多选，其他都是单选（即新选择的会覆盖之前选择的）
        //        给选中的加上相应的标记
        },
      //  确定筛选
        makeSure(){
          this.isClickShai = false;
        //  接下来请求数据，请求回来的数据都是放在品质联盟的
        //   this.$http.
        }
      },
      components:{
        GoodsList
      }
    }
</script>

<style scoped lang="scss">
  .home{

    .up{
      height: 90vh;
      /*background: yellow;*/

      .header{
        padding-bottom: 2vh;
        background: linear-gradient(to right, #00A9FF, #0086FF);
        overflow: hidden;
        .place{
          font-size: 17px;
          font-weight: bold;
          color: #fff;
          margin-top: 15px;
          margin-left: 10px;
          span:nth-child(3){
            font-size: 11px;
          }
        }
      }
      .search{
        margin: 0 13px;
        background: #fff;
        margin-top: 15px;
        height: 5.5vh;
        line-height: 5.5vh;
        text-align: center;
        color: #A2A2A2;
        font-size: 14px;
        span:nth-child(1){
          font-size: 24px;
          vertical-align: middle;
        }
      }
      .playnav{
        height: 28vh;
        background: #fff;
        .nav{
          display: flex;
          flex-wrap: wrap;
          .navli{
            display: flex;
            flex-direction: column;
            width: 20%;
            text-align: center;
            img{
              width: 35px;
              height: 35px;
              margin: 0 auto;
              display: inline-block;
              margin-top: 17px;
            }
            span{
              display: inline-block;
              margin-top: 8px;
              font-size: 12px;
              color: #666;
            }

          }
        }
      }
      .intro{
        margin: 0 10px;
        /*background: green;*/
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left{
          width: 49%;
          background: #F8F8F8;
          padding: 10px 0;
          position: relative;
          height: 16vh;
          &:nth-child(2) {
            h2 {
              color: #EB3B3B;
            }
            .status{
              color: #000;
              font-weight: bold;
            }
          }
          h2{
            margin-left: 10px;
          }
          .title{
            font-size: 12px;
            color: #666;
            margin-left: 10px;
          }
          .go{
            font-size: 12px;
            color: #AF8260;
            margin-top: 5px;
            margin-left: 10px;
            span{
              color: #EB3B3B;
            }
          }
          img{
            width:100px;
            position: absolute;
            height: 50px;
            right: 7px;
            bottom: 1px;
          }
        }
      }
      .playadv{
        height: 15vh;
        /*background: green;*/
        margin-top: 5px;
        img{
          width: 100%;
          height: 15vh;
        }
      }
      .titleS{
        display: flex;
        margin-top: 14px;
        font-size: 15px;
        color: #000;
        align-items: center;
        justify-content: center;
        &:before{
          display: block;
          content: "";
          width: 5.333333vw;
          height: .266667vw;
          background-color: #999;
          margin-right: 8px;
        }
        &:after{
          display: block;
          content: "";
          width: 5.333333vw;
          height: .266667vw;
          background-color: #999;
          margin-left: 8px;
        }
      }
      .navfour{
        display: flex;
        justify-content: space-around;
        /*border-bottom: 1px solid #F3F3F3;*/
        /*padding-bottom: 1.5vh;*/
        margin-top: 10px;
        position: relative;
        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-to{
          opacity: 0;
        }
        .slider-enter-active, .slider-leave-active {
          transition: opacity .5s
        }
        .slider-enter, .slider-leave-active{
          opacity: 0;
        }
        .fourli{
          font-size: 16px;

          i{
            font-size: 12px;
          }

        }
        .selsort{
          width: 100%;
          position: absolute;
          top: 37px;
          left: 0;
          /*padding: 10px 0;*/
          z-index: 3;
          padding-bottom: 2vh;
          background: #fff;
          .itemlist{
            margin-left: 15px;
            margin-top: 15px;
            font-size: 14px;
          }
        }
        .shaixuan{
          width: 100%;
          position: absolute;
          top: 37px;
          left: 0;
          /*padding: 10px 0;*/
          z-index: 3;
          padding-bottom: 2vh;
          background: #fff;
          .shai{
            width: 90%;
            margin: 0 auto;
            /*background: green;*/
            .shaidiv{
              span:nth-child(1){
                font-size: 14px;
                color: #999;
                display: inline-block;
                margin-top: 10px;
                margin-bottom: 5px;
              }
              .moresel{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .selli,.bgColor{
                  padding: 9px 0;
                  width: 32%;
                  font-size: 13px;
                  background: #FAFAFA;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-top: 6px;
                  img{
                    width: 10px;
                    height: 10px;
                  }
                  span{
                    margin-left: 4px;
                  }
                }
                .bgColor{
                  background: #EDF5FF;
                }
              }
            }
          }
          .doit{
            height: 7vh;
            background: #fff;
            margin-top: 13px;
            display: flex;
            align-items: center;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            .clear,.do{
              text-align: center;
              width: 50%;
              padding: 2vh 0;
            }
            .do{
              background: #00D762;
              color: #fff;
            }
          }
        }
      }
      .box{
        /*overflow-y: auto;*/
        /*background: green;*/
        position: relative;
        .shadow{
          position: fixed;
          left: 0;
          top: 112px;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,.7);
          z-index: 2;
        }
      }
    }
  }
</style>
