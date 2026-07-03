// Register.vue
<template>
  <div class="register-container">
    <div class="register-header">
      <h1>加入我们</h1>
      <p>注册成为红色文化收藏爱好者</p>
    </div>

    <van-form @submit="onSubmit" class="register-form">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请设置用户名"
        :rules="[{ required: true, message: '请输入用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请设置密码（需含大小写字母和数字）"
        :rules="[
          { required: true, message: '请输入密码' },
          { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, message: '密码需包含大小写字母和数字' }
        ]"
      />
      <van-field
        v-model="confirmPassword"
        type="password"
        name="confirmPassword"
        label="确认密码"
        placeholder="请再次输入密码"
        :rules="[
          { required: true, message: '请确认密码' },
          { validator: validateConfirm, message: '两次密码不一致' }
        ]"
      />
      <div class="form-actions">
        <van-button round block type="danger" native-type="submit">
          注册
        </van-button>
      </div>
      <div class="form-footer">
        <span>已有账号？</span>
        <span class="link" @click="$router.push('/login')">立即登录</span>
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
const confirmPassword = ref('')

const validateConfirm = () => password.value === confirmPassword.value

const onSubmit = () => {
  const users = JSON.parse(localStorage.getItem('users')) || []
  if (users.find(item => item.username === username.value)) {
    showToast({ message: '用户名已存在', icon: 'fail' })
    return
  }
  const newUser = { username: username.value, password: password.value }
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  showToast({ message: '注册成功，请登录', icon: 'success' })
  router.push('/login')
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background: #f5f0eb;
  padding: 40px 32px 0 32px;
}

.register-header {
  text-align: center;
  margin-bottom: 32px;
}

.register-header h1 {
  font-size: 28px;
  color: #c0392b;
  margin: 0 0 8px 0;
}

.register-header p {
  font-size: 14px;
  color: #999;
  margin: 0;
}

.register-form {
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

:deep(.van-field__error-message) {
  font-size: 12px;
  color: #e74c3c;
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