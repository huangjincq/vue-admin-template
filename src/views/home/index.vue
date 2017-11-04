<template>
  <el-container class="container">
    <el-aside width="200px">
      <sidebar></sidebar>
    </el-aside>
    <el-container >
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-main>
        <home-main></home-main>
      </el-main>
    </el-container>
  </el-container>
  <!--<div>
    <div style="position:absolute;left: 0;width: 200px;top: 0;height: 100%;z-index: 99">
      <sidebar></sidebar>
    </div>
    <div  style="position:absolute;padding-left: 200px;width: 100%;height: 100%;">
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-main>
        <home-main></home-main>
      </el-main>
    </div>
  </div>-->
</template>

<script>
  import sidebar from './sidebar'
  import homeMain from './homeMain'
  import navbar from './navbar'
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    components: { sidebar, homeMain, navbar },
    data () {
      return {}
    },
    created () {
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    methods: {
      loginOut () {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()  // 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position fixed
    left 0
    right 0
    bottom 0
    top 0
</style>
