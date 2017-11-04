<template>
  <div class="navbar">
    <i class="iconfont icon-zhankai" :class="{left:!sidebar}" @click="toggleSideBar"></i>
    <levelbar></levelbar>
    {{sidebar}}
    <el-button @click="logout">退出</el-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import levelbar from './Levelbar.vue'

  export default {
    components: { levelbar },
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

<style lang="stylus" scoped>
  .navbar
    height 60px
    line-height 60px
    .icon-zhankai
      display inline-block
      position relative
      top -20px
      cursor pointer
      &.left
        transform rotate(180deg)

    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
    .errLog-container {
      display: inline-block;
      position: absolute;
      right: 150px;
    }
    .screenfull {
      position: absolute;
      right: 90px;
      top: 16px;
      color: red;
    }
    .avatar-container {
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 35px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
</style>



