// Login.vue
<template>
  <div class="login-container">
    <div class="login-header">
      <h1>欢迎回来</h1>
      <p>登录您的红色文化收藏账号</p>
    </div>

    <van-form @submit="onSubmit" class="login-form">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请输入用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div class="form-actions">
        <van-button round block type="danger" native-type="submit">
          登录
        </van-button>
      </div>
      <div class="form-footer">
        <span>还没有账号？</span>
        <span class="link" @click="$router.push('/register')">立即注册</span>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

const router = useRouter()
const username = ref('')
const password = ref('')

const onSubmit = () => {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(
    item => item.username === username.value && item.password === password.value
  )
  if (user) {
    showToast({ message: '登录成功', icon: 'success' })
    localStorage.setItem('currentUser', JSON.stringify(user))
    router.push('/')
  } else {
    showToast({ message: '用户名或密码错误', icon: 'fail' })
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background: #f5f0eb;
  padding: 60px 32px 0 32px;
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.login-header h1 {
  font-size: 28px;
  color: #c0392b;
  margin: 0 0 8px 0;
}

.login-header p {
  font-size: 14px;
  color: #999;
  margin: 0;
}

.login-form {
  background: white;
  border-radius: 16px;
  padding: 24px 16px 20px 16px;
  box-shadow: 0 4px 20px rgba(192, 57, 43, 0.08);
}

:deep(.van-field) {
  padding: 12px 0;
}

:deep(.van-field__label) {
  color: #333;
  font-weight: 500;
}

:deep(.van-field__control) {
  color: #333;
}

.form-actions {
  margin-top: 16px;
}

:deep(.van-button--danger) {
  background: #c0392b;
  border-color: #c0392b;
  height: 44px;
  font-size: 16px;
}

:deep(.van-button--danger:active) {
  background: #a93226;
  border-color: #a93226;
}

.form-footer {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #999;
}

.form-footer .link {
  color: #c0392b;
  font-weight: 500;
  cursor: pointer;
}

.form-footer .link:active {
  opacity: 0.7;
}
</style>