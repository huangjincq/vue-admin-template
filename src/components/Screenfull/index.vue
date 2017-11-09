<template>
  <el-tooltip effect="dark" :content="isFullScreen ? '退出全屏' : '全屏'" placement="bottom">
    <el-button class="screen-full-btn" type="text" @click='click'>
      <i class="iconfont" :class="isFullScreen?'icon-btn_cancelFullscreen':'icon-quanping'"></i>
    </el-button>
  </el-tooltip>
</template>

<script>
  import screenfull from 'screenfull'

  export default {
    name: 'screenfull',
    data () {
      return {
        isFullScreen: false
      }
    },
    methods: {
      click () {
        if (!screenfull.enabled) {
          this.$message({
            message: 'you browser can not work',
            type: 'warning'
          })
          return false
        }
        this.isFullScreen = !this.isFullScreen
        screenfull.toggle()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .screen-full-btn
    padding 0 10px
    height 100%
</style>
