<template>
  <el-menu
    :background-color="themeColor.backgroundColor"
    :text-color="themeColor.textColor"
    :active-text-color="themeColor.activeTextColor"
    :default-active="$route.path"
    class="sidebar" :class="{close:sidebar}"
    router :collapse="sidebar">
    <template v-for="item in permissionRouters">
      <el-menu-item v-if="!item.hidden && item.noDropdown && item.children.length>0"
                    :index="item.path+'/'+item.children[0].path">
        <i v-if='item.icon' :class="`iconfont ${item.icon}`"></i>
        <span slot="title">{{item.children[0].name}}</span>
      </el-menu-item>
      <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
        <template slot="title">
          <i v-if='item.icon' :class="`iconfont ${item.icon}`"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
          <sidebar-item class='nest-menu' v-if='child.children&&child.children.length>0'
                        :routes='[child]'></sidebar-item>
          <el-menu-item :index="item.path+'/'+child.path">
            <i v-if='child.icon' :class="`iconfont ${item.icon}`"></i>
            <span slot="title">{{child.name}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
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
      console.log(this.themeId)
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
    .iconfont
      margin-right 8px
      font-size 14px
      color inherit
</style>
