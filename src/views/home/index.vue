<template>
  <div id="main" class="container">
    <v-sidebar></v-sidebar>
    <el-container class="container-right" :class="{close:sidebar}">
      <el-header height="50px">
        <v-header></v-header>
      </el-header>
      <el-main>
        <v-main></v-main>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import VSidebar from './components/VSidebar'
  import VMain from './components/VMain'
  import VHeader from './components/VHeader'
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    components: { VSidebar, VMain, VHeader },
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
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    overflow hidden
    .container-right
      padding-left 200px
      height 100%
      transition padding-left .25s ease-out
      &.close
        padding-left 64px
    .el-header
      padding 0
      background-color #fff
      box-shadow 0 2px 1px 1px hsla(0,0%,39%,.1)
    .el-main
      padding 10px
      background-color #f0f0f0
</style>
