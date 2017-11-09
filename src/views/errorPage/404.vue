<template>
  <el-card class="page-404">
    <img class="pic" src="../../assets/img/404.png" alt="">
    <p class="text">出错啦！您访问的页面不存在</p>
    <el-button type="primary" class="return" round>返 回</el-button>
  </el-card>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {}
  }
</script>

<style lang="stylus" scoped>
  .page-404
    text-align center
    padding 50px 0
    height 100%
    .text
      color #aaa
      margin-bottom 20px
    .return
      width 200px
</style>
