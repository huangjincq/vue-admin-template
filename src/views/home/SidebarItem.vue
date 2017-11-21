<template>
  <div>
    <template v-for="item in routes">
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
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
  .iconfont
    margin-right 8px
    font-size 14px
    color inherit
</style>

