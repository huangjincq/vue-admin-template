<template>
  <el-card>
    el - 动态表单 ( 包含表单验证 )
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

    <el-form :model="ruleForm2" ref="ruleForm2" label-width="100px">
      <el-form-item :label="item.label" :rules="item.rules"  v-for="(item, index) in formData" :key="index">
        <el-input v-if="item.type === 'input'" v-model='item.val'></el-input>
        <el-radio-group v-if="item.type === 'radio'" v-model="item.val">
          <el-radio
            v-for="v in item.options"
            :key="v.value"
            :label="v.value">
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
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>

  </el-card>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        formData: [],
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { requied: true, trigger: 'blur' }
          ],
          checkPass: [
            { requied: true, trigger: 'blur' }
          ],
          age: [
            { requied: true, trigger: 'blur' }
          ]
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.formData = [
          {
            type: 'input',
            val: '',
            label: '输入框',
            rules: [
              { required: true, message: '输入不能为空', trigger: 'blur' }
            ]
          },
          {
            type: 'radio',
            val: '',
            label: '单选框',
            options: [
              { label: '单选一', value: 1 },
              { label: '单选二', value: 2 },
              { label: '单选三', value: 3 }
            ]
          },
          {
            type: 'checkbox',
            val: [],
            label: '复选框',
            options: [
              { label: '复选一', value: 1 },
              { label: '复选二', value: 2 },
              { label: '复选三', value: 3 }
            ]
          }, {
            type: 'select',
            val: '',
            label: '下拉框',
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
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
