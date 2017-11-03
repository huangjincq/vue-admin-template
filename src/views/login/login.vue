<template>
  <div id="login-page">
    <el-form :model="form" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登&nbsp;&nbsp;录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    created () {
      this.form.username = localStorage.getItem('AccountNumber')  // 读取用户账号
      this.form.password = localStorage.getItem('AccountPassword')  // 读取用户账号
    },
    mounted () {
      document.getElementById('login-page').style.height = window.innerHeight + 'px'
    },
    methods: {
      submitForm () {
        localStorage.setItem('AccountNumber', this.form.username)    // 储存用户账号
        localStorage.setItem('AccountPassword', this.form.password)  // 储存用户密码
        this.$store.dispatch('Login', this.form).then(res => {
          this.loading = false
          if (res.code === 'H0000') {
            this.$router.push({ path: '/home' })
          } else {
            console.log('login error')
            this.$toast({ message: res.data.msg })
          }
        }).catch(() => {
          console.log('catch')
          this.loading = false
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
