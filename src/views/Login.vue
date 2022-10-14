<template>
  <div class="login">
    <SimpleHeader :name="type == 'login' ? '登录' : '注册' " :back="'/home'"></SimpleHeader>
    <img class="logo" src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="">
    <div class="login_body login" v-if="type == 'login'">
      <van-field 
      v-model="username"
      label="用户名"
      placeholder="用户名"
      :rules="[{required: true, message: ''}]"
      ></van-field>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue';
import SimpleHeader from '@/components/SimpleHeader.vue'


const verifyRef = ref(null)
const state = reactive({
  username: '',
  password: '',
  username1: '',
  password1: '',
  type: 'login',
  imgCode: '',
  verify: '',
})

const toggle = (v) => {
  state.type = v
  state.verify = ''
}

// 提交登录或注册表单
const onSubmit = async (values) => {
  console.log('verifyRef.value.imgCode', verifyRef.value.imgCode)
  state.imgCode = verifyRef.value.imgCode || ''
  if (state.verify.toLowerCase() != state.imgCode.toLowerCase()) {
    Toast.fail('验证码有误')
    return
  }
  if (state.type == 'login') {
    const { data } = await login({
      "loginName": values.username,
      "passwordMd5": md5(values.password)
    })
    setLocal('token', data)
    // 需要刷新页面，否则 axios.js 文件里的 token 不会被重置
    window.location.href = '/'
  } else {
    await register({
      "loginName": values.username1,
      "password": values.password1
    })
    Toast.success('注册成功')
    state.type = 'login'
    state.verify = ''
  }
}

const {username, password, username1, password1, type, imgCode, verify} = toRefs(state)

</script>

<style lang="less" scoped>
 .login {
    .logo {
      width: 120px;
      height: 120px;
      display: block;
      margin: 80px auto 20px;
    }
    .login-body {
      padding: 0 20px;
    }
    .login {
      .link-register {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
    .register {
      .link-login {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
    .verify-bar-area {
      margin-top: 24px;
      .verify-left-bar {
        border-color: #1baeae;
      }
      .verify-move-block {
        background-color: #1baeae;
        color: #fff;
      }
    }
    .verify {
      >div {
        width: 100%;
      }
      display: flex;
      justify-content: center;
      .cerify-code-panel {
        margin-top: 16px;
      }
      .verify-code {
        width: 40%!important;
        float: left!important;
      }
      .verify-code-area {
        float: left!important;
        width: 54%!important;
        margin-left: 14px!important;
        .varify-input-code {
          width: 90px;
          height: 38px!important;
          border: 1px solid #e9e9e9;
          padding-left: 10px;
          font-size: 16px;
        }
        .verify-change-area {
          line-height: 44px;
        }
      }
    }
  }
</style>