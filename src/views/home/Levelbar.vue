<template>
  <el-breadcrumb class="app-levelbar" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="(item,index)  in levelList" :key="index"
      :to="item.redirect||item.path"
    >
      {{item.name}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      levelList () {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0]
        if (first && (first.name !== '首页' || first.path !== '')) {
          matched = [{ name: '首页', path: '/' }, ...matched]
        }
        return matched
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .app-levelbar
    line-height 50px
    font-size 14px
</style>
