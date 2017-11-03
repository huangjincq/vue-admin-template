<template>
  <div class="page-404">
    <img class="pic" src="../../assets/img/404.png" alt="">
    <p class="text">出错啦！您访问的页面不存在</p>
    <a href="/#/" class="return">返回</a>
  </div>
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
    .pic
      margin-top 10%
      width 60%
      margin-bottom 20px
    .text
      color #aaa
      margin-bottom 20px
    .return
      display: block;
      margin 0 auto
      width: 40%
      height: 36px;
      background: #1CBB93;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      line-height: 36px;
      cursor: pointer;
</style>
