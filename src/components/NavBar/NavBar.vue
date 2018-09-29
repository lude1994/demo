<template>
  <div class="page-navbar">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">点餐</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
      <mt-tab-item id="3">商家</mt-tab-item>
    </mt-navbar>


    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
          <book-food></book-food>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <comment></comment>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import BookFood from '../../components/BookFood/BookFood'
  import Comment from '../../components/Comment/Comment'
export default {
  name: 'page-navbar',
  components:{BookFood,Comment},
  data() {
    return {
      selected: '1'
    };
  }
};
</script>
<style scoped lang="scss">
  /*.page-navbar{*/
    .box1{
      img{
        width: 90%;
        height: 10vh;
      }
    /*}*/
  }
</style>
