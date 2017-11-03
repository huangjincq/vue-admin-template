<template>
  <div class="home-page">
   主页
    <el-button @click="loginOut">退出</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    watch: {
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

</style>
