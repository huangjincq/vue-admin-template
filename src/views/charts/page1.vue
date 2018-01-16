<template>
  <el-card>
    el - 动态表单 ( 不含表单验证 )
    <el-button @click="getData">获取表单值</el-button>

    <div v-for="(item, index) in formData">
      <el-input v-if="item.type === 'input'" v-model='item.val'></el-input>
      <el-radio-group v-if="item.type === 'radio'" v-model="item.val">
        <el-radio
          v-for="v in item.options"
          :key="v.value"
          :label="v.value"
        >
          {{v.label}}
        </el-radio>
      </el-radio-group>
      <el-checkbox-group v-if="item.type === 'checkbox'" v-model="item.val">
        <el-checkbox
          v-for="v in item.options"
          :key="v.value"
          :label="v.value">
          {{v.label}}
        </el-checkbox>
      </el-checkbox-group>
      <el-select v-if="item.type === 'select'" v-model="item.val" placeholder="请选择">
        <el-option
          v-for="v in item.options"
          :key="v.value"
          :label="v.label"
          :value="v.value">
        </el-option>
      </el-select>
    </div>

  </el-card>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        formData: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.formData = [
          {
            type: 'input',
            val: ''
          },
          {
            type: 'radio',
            val: '',
            options: [
              { label: '单选一', value: 1 },
              { label: '单选二', value: 2 },
              { label: '单选三', value: 3 }
            ]
          },
          {
            type: 'checkbox',
            val: [],
            options: [
              { label: '复选一', value: 1 },
              { label: '复选二', value: 2 },
              { label: '复选三', value: 3 }
            ]
          }, {
            type: 'select',
            val: '',
            options: [
              { label: '下拉选项一', value: 1 },
              { label: '下拉选项二', value: 2 },
              { label: '下拉选项三', value: 3 }
            ]
          }]
        this.$message('赋值了')
      }, 1000)
    },
    methods: {
      getData () {
        console.log(this.formData)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
