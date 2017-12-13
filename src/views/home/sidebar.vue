<template>
  <el-menu
    :background-color="themeColor.backgroundColor"
    :text-color="themeColor.textColor"
    :active-text-color="themeColor.activeTextColor"
    :default-active="$route.path"
    class="sidebar" :class="{close:sidebar}"
    router :collapse="sidebar">
    <sidebar-item :routes="permissionRouters"></sidebar-item>
  </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'

  export default {
    components: { SidebarItem },
    data () {
      return {
        themeMap: {
          1: {
            backgroundColor: '#495159',
            textColor: '#eee',
            activeTextColor: '#2d8cf0'
          },
          2: {
            backgroundColor: '#495159',
            textColor: '#eee',
            activeTextColor: '#64d572'
          },
          3: {
            backgroundColor: '#495159',
            textColor: '#eee',
            activeTextColor: '#dc9a35'
          },
          4: {
            backgroundColor: '#495159',
            textColor: '#eee',
            activeTextColor: '#f10215'
          },
          5: {
            backgroundColor: null,
            textColor: null,
            activeTextColor: null
          },
          6: {
            backgroundColor: null,
            textColor: null,
            activeTextColor: null
          },
          7: {
            backgroundColor: null,
            textColor: null,
            activeTextColor: null
          },
          8: {
            backgroundColor: null,
            textColor: null,
            activeTextColor: null
          }
        }
      }
    },
    computed: {
      ...mapGetters([
        'permissionRouters',
        'sidebar',
        'themeId'
      ]),
      themeColor () {
        return this.themeMap[this.themeId]
      }
    },
    created () {
      console.log(this.$router.options.routes)
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .sidebar
    position fixed
    left 0
    top 0
    height 100%
    z-index 1
    width 200px
    transition width .25s ease-out
    box-sizing content-box
    overflow-y auto
    overflow-x hidden
    &.close
      width 64px
      overflow-x visible
      overflow-y visible
</style>
