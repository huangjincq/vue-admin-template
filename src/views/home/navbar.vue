<template>
  <div class='navbar'>
    <div class='navbar-left'>
      <i class='iconfont icon-zhankai' :class='{left:!sidebar}' @click='toggleSideBar'></i>
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
      <el-dropdown class='avatar-container'>
        <div class='avatar-wrapper navbar-right-item'>
          <img class='user-avatar' :src='avatar'>
          <i class='on bottom b-white'></i>
        </div>
        <el-dropdown-menu class='user-dropdown' slot='dropdown'>
          <router-link class='inlineBlock' to='/'>
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <a target='_blank' href=''>
            <el-dropdown-item>
              项目地址
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided @click='logout'><span style='display:block;'>退出登录</span></el-dropdown-item>
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
  import levelbar from './levelbar.vue'

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
      .icon-zhankai
        display block
        font-size 13px
        position relative
        top -2px
        cursor pointer
        margin-right 10px
        transform-origin center center
        &.left
          transform rotate(180deg)

    .navbar-right
      display flex
      margin-right 15px
      .navbar-right-item
        transition border .25s
        border-bottom 2px solid transparent
        height 50px
        cursor: pointer
        position relative
        padding 0 10px
        &:hover
          border-bottom 2px solid #000
      .avatar-container
        .avatar-wrapper
          .user-avatar
            width: 40px
            height 40px
            margin-top 5px
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



