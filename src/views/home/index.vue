<template>
  <div class="container">
    <sidebar></sidebar>
    <el-container class="container-right" :class="{close:sidebar}">
      <el-header height="50px">
        <navbar></navbar>
      </el-header>
      <el-main>
        <home-main></home-main>
      </el-main>
    </el-container>
  </div>
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
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .container
    position fixed
    left 0
    right 0
    bottom 0
    top 0
    .container-right
      padding-left 200px
      height 100%
      transition padding-left .25s ease-out
      &.close
        padding-left 64px
    .el-header
      padding 0 10px
</style>
