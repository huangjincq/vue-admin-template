<template>
  <div class="login-container">
    <el-form class="card-box login-form" :model="loginForm" :rules="loginRules" ref="loginForm"
             label-position="left">
      <h3 class="title">Elememt-Ui2 后台系统</h3>

      <el-form-item prop="username">
        <span class="icon-container">
          <i class="iconfont icon-zhanghu"></i>
        </span>
        <el-input name="username" v-model="loginForm.username" placeholder="请输入用户名"/>
      </el-form-item>

      <el-form-item prop="password">
        <span class="icon-container">
          <i class="iconfont icon-mima"></i>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                  placeholder="请输入密码"/>
        <span class='show-pwd' @click='showPwd'>
          <el-tooltip :content="pwdType==='password'?'密码可见':'密码不可见'" placement="right">
            <i class="iconfont" :class="pwdType==='password'?'icon-zhengyan':'icon-biyan'"></i>
          </el-tooltip>
        </span>
      </el-form-item>

      <el-button type="primary" style="width:100%;" :loading="loading" @click="handleLogin">登录</el-button>
      <div class='tips'>账号密码随便填</div>
    </el-form>
  </div>
</template>

<script>
  import { setLocalStorage, getLocalStorage } from '@/utils/storage'

  export default {
    name: 'login',
    data () {
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'admin',
          password: '1234567'
        },
        loginRules: {
          username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        pwdType: 'password',
        loading: false,
        showDialog: false
      }
    },
    created () {
      this.loginForm.username = getLocalStorage('AccountNumber')  // 读取用户账号
      this.loginForm.password = getLocalStorage('AccountPassword')  // 读取用户账号
    },
    methods: {
      showPwd () {
        this.pwdType = this.pwdType === 'password' ? 'text' : 'password'
      },
      handleLogin () {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            setLocalStorage('AccountNumber', this.loginForm.username)    // 储存用户账号
            setLocalStorage('AccountPassword', this.loginForm.password)  // 储存用户密码
            this.loading = true
            this.$store.dispatch('Login', this.loginForm).then(res => {
              this.loading = false
              if (res.code === 'H0000') {
                this.$router.push({ path: '/home' })
              } else {
                console.log('login error')
                this.$message(res.data.msg)
              }
            }).catch(() => {
              console.log('catch')
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .login-container {
    height: 100vh;
    background url('../../assets/img/login-bg.jpg')
    background-size 100% 100%
    padding-top 20vh
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .tips {
      font-size: 14px;
      color: #666;
      margin-top: 10px;
    }
    .icon-container {
      padding: 6px 5px 6px 15px;
      color: #fff;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: #000;
      margin-bottom: 30px;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 0 auto
      border 2px solid rgba(255, 255, 255, .8)
      border-radius 10px
      background-color rgba(255, 255, 255, .5)
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.6);
      border-radius: 5px;
      color: #fff;
    }
    .show-pwd {
      position: absolute;
      right: -6px;
      top: 7px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }
  }
</style>
<style lang="stylus">
  .login-container
    .el-form-item
      padding-right 10px
    .el-input__inner
      background-color transparent
      border-color transparent
      color #fff
</style>
