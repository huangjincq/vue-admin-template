<template>
  <div>
    新建模块11111111111111111111111
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <el-button type="primary">
      更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>

    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <el-button>上左</el-button>
    </el-tooltip>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
    },
    mounted () {

    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>

</style>
