<template>
    <div>
        <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
            <h3 class="title" style="padding-left:22px;">Login System</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="password"></el-input>
            </el-form-item>
            <el-form-item style="width: 100%;"> 
                <el-button type="primary" style="width: 47%;" @click.native.prevent="reset">Reset</el-button>
                <el-button type="primary" style="width: 48%;" @click.native.prevent="login" :login="logining">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
    name: 'Login',
    data() {
        return {
            logining: false,
            loginForm: {
                username: 'admin',
                password: '111111'
            },
            fieldRules: {
                username: [
                    {required: true, message:'please enter the account', trigger: 'blur'}
                ],
                password: [
                    {required: true, message:'enter your PIN', trigger: 'blur'}
                ],
            }
        }
    },
    created() {

    },
    methods: {
        login() {
            this.logining = true
            let userInfo = {username:this.loginForm.username, password:this.loginForm.password}
            this.$api.login(userInfo).then(res => {
                Cookies.set('token', res.data.data.token) 
                sessionStorage.setItem('user', userInfo.username) 
                this.$router.push('/')
            }).catch(err =>{
                alert(err);
            });
        },
        reset() {
            this.$refs.loginForm.resetFields()
        }
    }
}
</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>