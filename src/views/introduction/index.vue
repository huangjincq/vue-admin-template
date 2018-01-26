<template>
  <el-card>
    <h2>
      简介、文档
      <svg-icon icon-class="-zhibi" style="font-size: 80px"></svg-icon>
    </h2>
    <ul class="list">
      <li>
        项目地址:<a target="_blank" href="https://github.com/huangjincq/vue-admin-template">
        https://github.com/huangjincq/vue-admin-template
      </a>
      </li>
      <li>
        <a target="_blank" href="http://www.jianshu.com/p/cbec52341bd9">
          从0用Vue2.5和Elemnt-ui2搭建一个后台模版（1.搭建框架）
        </a>
      </li>
      <li>
        <a target="_blank" href="http://www.jianshu.com/p/aca48c74b48d">
          从0用Vue2.5和Elemnt-ui2搭建一个后台模版（2.登录、权限）
        </a>
      </li>
    </ul>
    <el-alert title="业务功能" type="warning" :closable="false"></el-alert>
    <ul class="list">
      <li>
        <el-checkbox v-model="checked" disabled>登录、注销</el-checkbox>
      </li>
      <li>
        <el-checkbox v-model="checked" disabled>路由拦截、权限验证</el-checkbox>
      </li>
      <li>
        <el-checkbox v-model="unChecked">异步路由加载</el-checkbox>
      </li>
      <li>
        <el-checkbox v-model="checked" disabled>多环境发布（fjpublish）</el-checkbox>
      </li>
      <li>
        <el-checkbox v-model="checked" disabled>动态菜单栏（路由生成）</el-checkbox>
      </li>
      <li>
        <el-checkbox v-model="checked" disabled>动态面包屑导航（路由生成）</el-checkbox>
      </li>
      <li>
        <el-checkbox v-model="checked" disabled>动态标签页</el-checkbox>
      </li>
    </ul>
    <el-alert title="UI功能" type="warning" :closable="false"></el-alert>
    <ul class="list">
      <li>
        <el-checkbox v-model="checked" disabled>菜单栏收缩</el-checkbox>
      </li>
      <li>
        <el-checkbox v-model="checked" disabled>动态换肤</el-checkbox>
      </li>
    </ul>
  </el-card>
</template>

<script>

  export default {
    data () {
      return {
        checked: true,
        unChecked: false
      }
    }
  }
</script>

<style scoped lang="stylus">
  .list
    list-style none
    li
      padding 10px

</style>
