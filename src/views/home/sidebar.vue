<template>
  <el-menu
    :default-active="$route.path"
    class="sidebar" :class="{close:sidebar}"
    router :collapse="sidebar"
  >
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
          <sidebar-item class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]'></sidebar-item>
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
      return {}
    },
    computed: {
      ...mapGetters([
        'permissionRouters',
        'sidebar'
      ])
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
    &.close
      width 64px
    .iconfont
      margin-right 8px
</style>
