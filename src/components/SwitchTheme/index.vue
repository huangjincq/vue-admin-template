<template>
  <el-dropdown trigger="click" @command="changeTheme" size="small">
    <el-button type="text" class="switch-theme-btn">
      <i class="iconfont icon-yanse"></i><i class="el-icon-caret-bottom"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown" class="switch-theme">
      <el-dropdown-item :command="1">
        <i class="iconfont icon-iconfont02 blue"></i>
        <i v-show="themeId===1" class="iconfont icon-xuanzhong"></i>
      </el-dropdown-item>
      <el-dropdown-item :command="2">
        <i class="iconfont icon-iconfont02 green"></i>
        <i v-show="themeId===2" class="iconfont icon-xuanzhong"></i>
      </el-dropdown-item>
      <el-dropdown-item :command="3">
        <i class="iconfont icon-iconfont02 yellow"></i>
        <i v-show="themeId===3" class="iconfont icon-xuanzhong"></i>
      </el-dropdown-item>
      <el-dropdown-item :command="4">
        <i class="iconfont icon-iconfont02 red"></i>
        <i v-show="themeId===4" class="iconfont icon-xuanzhong"></i>
      </el-dropdown-item>
      <el-dropdown-item :command="5" divided>
        <i class="iconfont icon-staro blue"></i>
        <i v-show="themeId===5" class="iconfont icon-xuanzhong"></i>
      </el-dropdown-item>
      <el-dropdown-item :command="6">
        <i class="iconfont icon-staro green"></i>
        <i v-show="themeId===6" class="iconfont icon-xuanzhong"></i>
      </el-dropdown-item>
      <el-dropdown-item :command="7">
        <i class="iconfont icon-staro yellow"></i>
        <i v-show="themeId===7" class="iconfont icon-xuanzhong"></i>
      </el-dropdown-item>
      <el-dropdown-item :command="8">
        <i class="iconfont icon-staro red"></i>
        <i v-show="themeId===8" class="iconfont icon-xuanzhong"></i>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import { setLocalStorage, getLocalStorage } from '@/utils/storage'

  export default {
    components: {},
    data () {
      return {
        themeId: getLocalStorage('themeId') || 1
      }
    },
    created () {
      this.changeTheme(this.themeId)
    },
    methods: {
      changeTheme (value) {
        this.themeId = value
        this.$store.dispatch('SetTheme', value)
        const themeMap = {
          1: 'blue',
          2: 'green',
          3: 'yellow',
          4: 'red',
          5: 'blue',
          6: 'green',
          7: 'yellow',
          8: 'red'
        }
        const oldCss = document.getElementById('add-theme')
        const head = document.getElementsByTagName('head')[0]
        oldCss && head.removeChild(oldCss)
        setLocalStorage('themeId', value)

        if (value === 1 || value === 5) {
          return
        }
        // 需要移到单独的文件存放
        const themeSrc = `/static/theme/${themeMap[value]}/index.css`
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
  .switch-theme-btn
    padding 0 10px
    height 50px
  .switch-theme
    .icon-xuanzhong
      position relative
      margin-left 5px
      top 1px
    .iconfont
      font-size 18px
    .blue
      color #409EFF
    .green
      color #64D572
    .yellow
      color #DC9A35
    .red
      color #F10215

  .icon-yanse
    font-size 18px
</style>
