<template>
  <div>
    <el-popover
      ref="popover"
      placement="bottom"
      v-model="visible">
      <el-radio-group v-model="theme" @change="changeTheme">
        <el-radio label="default">
          <i class="square"></i>
        </el-radio>
        <el-radio label="red">
          <i class="square red"></i>
        </el-radio>
        <el-radio label="green">
          <i class="square green"></i>
        </el-radio>
      </el-radio-group>
    </el-popover>

    <span v-popover:popover style="display: inline-block;width:100%;height: 100%">换主题</span>

  </div>
</template>

<script>
  import { setLocalStorage, getLocalStorage } from '@/utils/storage'

  export default {
    components: {},
    data () {
      return {
        visible: false,
        theme: getLocalStorage('theme') || 'default'
      }
    },
    created () {
      this.changeTheme()
    },
    methods: {
      changeTheme () {
        const oldCss = document.getElementById('add-theme')
        const head = document.getElementsByTagName('head')[0]
        oldCss && head.removeChild(oldCss)
        setLocalStorage('theme', this.theme)

        if (this.theme === 'default' || this.theme === undefined) {
          return
        }
        // 需要移到单独的文件存放
        const themeSrc = `/static/theme/${this.theme}/index.css`
        loadCss(themeSrc)

        function loadCss (path) {
          var link = document.createElement('link')
          link.id = 'add-theme'
          link.href = path
          link.rel = 'stylesheet'
          link.type = 'text/css'
          head.appendChild(link)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .el-radio
    display flex
    margin 5px 0 !important
    align-items center

  .square
    display inline-block
    width 40px
    height 15px
    background-color #409EFF
    &.red
      background-color #fc2509
    &.green
      background-color #4FC08D
</style>
