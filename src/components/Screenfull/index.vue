<template>
  <div @click='click'>
    <el-tooltip effect="dark" :content="isFullScreen ? '退出全屏' : '全屏'" placement="bottom">
      <i :class="isFullScreen?'el-icon-upload':'el-icon-rank'"></i>
    </el-tooltip>
  </div>
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

<style scoped>

</style>
