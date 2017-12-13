<template>
  <div class='navbar'>
    <div class='navbar-left'>
      <el-button class="sidebar-btn" @click='toggleSideBar'>
        <i class='iconfont icon-p-menus' :class='{left:!sidebar}'></i>
      </el-button>
      <levelbar></levelbar>
      <tabs-view></tabs-view>
    </div>
    <div class='navbar-right'>
      <div class='navbar-right-item'>
        <screenfull></screenfull>
      </div>
      <div class='navbar-right-item'>
        <switch-theme></switch-theme>
      </div>
      <el-dropdown class='avatar-container' trigger="click">
        <div class='avatar-wrapper navbar-right-item'>
          <img class='user-avatar' :src='avatar'>
          <i class='on bottom b-white'></i>
        </div>
        <el-dropdown-menu class='user-dropdown' slot='dropdown'>

          <el-dropdown-item>
            <router-link class='inlineBlock' to='/'>
              首页
            </router-link>
          </el-dropdown-item>

          <el-dropdown-item>
            <a target='_blank' href='https://github.com/huangjincq/vue-admin-template'>
              项目地址
            </a>
          </el-dropdown-item>
          <el-dropdown-item divided><span @click='logout' style='display:block;'>退出登录</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Screenfull from '@/components/Screenfull'
  import SwitchTheme from '@/components/SwitchTheme'
  import tabsView from './tabsView'
  import levelbar from './levelbar'

  export default {
    components: { levelbar, Screenfull, tabsView, SwitchTheme },
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'name',
        'avatar'
      ])
    },
    methods: {
      toggleSideBar () {
        this.$store.dispatch('ToggleSideBar')
        console.log(this.sidebar)
      },
      logout () {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()// 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
</script>

<style lang='stylus' scoped>
  .navbar
    height 50px
    line-height 50px
    display flex
    justify-content space-between
    .navbar-left
      flex 1
      display flex
      .sidebar-btn
        border none
        &:hover
          background #fff
        &:focus
          background #fff
          color inherit

        .icon-p-menus
          display inline-block
          font-size 18px
          transform-origin center center
          transition transform .25s ease-out
          transform rotate(-90deg)
          &.left
            transform rotate(0deg)

    .navbar-right
      display flex
      margin-right 30px
      .navbar-right-item
        transition border .25s
        border-bottom 2px solid transparent
        height 50px
        cursor pointer
        &:hover
          border-bottom 2px solid #000
      .avatar-container
        .avatar-wrapper
          padding 0 10px
          .user-avatar
            width 36px
            height 36px
            margin-top 8px
            border-radius: 50%;
          .on
            position absolute
            left auto
            top auto
            bottom 5px
            right 10px
            width 10px
            height 10px
            background-color #6cc788
            border 2px solid #fff
            border-radius: 50%


</style>



