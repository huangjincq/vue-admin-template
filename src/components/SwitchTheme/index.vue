<template>
  <el-dropdown trigger="click" @command="changeTheme" size="small">
    <el-button type="text" class="switch-theme-btn">
      <svg-icon icon-class="yanse"></svg-icon><i class="el-icon-caret-bottom"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown" class="switch-theme">
      <el-dropdown-item :command="1">
        <svg-icon icon-class="iconfont02" class-name="blue"></svg-icon>
        <svg-icon v-show="themeId===1" icon-class="xuanzhong"></svg-icon>
      </el-dropdown-item>
      <el-dropdown-item :command="2">
        <svg-icon icon-class="iconfont02" class-name="green"></svg-icon>
        <svg-icon v-show="themeId===2" icon-class="xuanzhong"></svg-icon>
      </el-dropdown-item>
      <el-dropdown-item :command="3">
        <svg-icon icon-class="iconfont02" class-name="yellow"></svg-icon>
        <svg-icon v-show="themeId===3" icon-class="xuanzhong"></svg-icon>
      </el-dropdown-item>
      <el-dropdown-item :command="4">
        <svg-icon icon-class="iconfont02" class-name="red"></svg-icon>
        <svg-icon v-show="themeId===4" icon-class="xuanzhong"></svg-icon>
      </el-dropdown-item>
      <el-dropdown-item :command="5" divided>
        <svg-icon icon-class="staro" class-name="blue"></svg-icon>
        <svg-icon v-show="themeId===6" icon-class="xuanzhong"></svg-icon>
      </el-dropdown-item>
      <el-dropdown-item :command="6">
        <svg-icon icon-class="staro" class-name="green"></svg-icon>
        <svg-icon v-show="themeId===6" icon-class="xuanzhong"></svg-icon>
      </el-dropdown-item>
      <el-dropdown-item :command="7">
        <svg-icon icon-class="staro" class-name="yellow"></svg-icon>
        <svg-icon v-show="themeId===7" icon-class="xuanzhong"></svg-icon>
      </el-dropdown-item>
      <el-dropdown-item :command="8">
        <svg-icon icon-class="staro" class-name="red"></svg-icon>
        <svg-icon v-show="themeId===8" icon-class="xuanzhong"></svg-icon>
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
  .icon-xuanzhong
    margin-left 5px
  .svg-icon
    font-size 18px
    + .svg-icon
      margin-left 5px
  .blue
    color #409EFF
  .green
    color #64D572
  .yellow
    color #DC9A35
  .red
    color #F10215
</style>
