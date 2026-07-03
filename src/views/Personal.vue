<template>
  <div class="personal-container">
    <!-- 头部个人信息卡片 -->
    <div class="user-header">
      <div class="user-avatar">
        <van-icon name="user-circle-o" size="64" color="#c0392b" />
      </div>
      <div class="user-info">
        <h2 class="user-name">红色文化爱好者</h2>
        <p class="user-slogan">传承红色基因 · 弘扬革命精神</p>
      </div>
    </div>

    <!-- 统计卡片 -->
    <div class="stats-row">
      <div class="stat-card">
        <span class="stat-num">66</span>
        <span class="stat-label">浏览藏品</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">50</span>
        <span class="stat-label">旅游订单</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">12</span>
        <span class="stat-label">收藏文章</span>
      </div>
    </div>

    <!-- 功能菜单 -->
    <div class="menu-section">
      <div class="menu-title">功能入口</div>
      <van-cell
        v-for="item in menuList"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        is-link
        :to="item.to"
        class="menu-cell"
      />
    </div>

    <!-- 底部信息 -->
    <div class="footer-info">
      <p>红色文化收藏档案馆 © 2026</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuList = ref([
  { title: '前往登录', icon: 'records-o', to: '/login' },
  { title: '前往注册', icon: 'edit', to: '/register' },
  { title: '前往旅游', icon: 'flower-o', to: '/tour' }
])
</script>

<style scoped>
.personal-container {
  min-height: 100vh;
  background: #f5f0eb;
  padding: 0 16px 80px 16px;
}

/* ===== 用户头部 ===== */
.user-header {
  background: linear-gradient(135deg, #c0392b, #e74c3c);
  border-radius: 16px;
  padding: 30px 20px 24px 20px;
  margin-top: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(192, 57, 43, 0.3);
}

.user-avatar {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.user-name {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 4px 0;
}

.user-slogan {
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  margin: 0;
  letter-spacing: 2px;
}

/* ===== 统计卡片 ===== */
.stats-row {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.stat-card {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 16px 0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.stat-num {
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #c0392b;
}

.stat-label {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

/* ===== 菜单 ===== */
.menu-section {
  margin-top: 16px;
}

.menu-title {
  font-size: 15px;
  font-weight: bold;
  color: #333;
  padding: 10px 4px 10px 4px;
  position: relative;
  padding-left: 12px;
  border-left: 3px solid #c0392b;
  margin-bottom: 4px;
}

.menu-cell {
  background: white;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
}

.menu-cell:active {
  background: #f5f0eb;
}

:deep(.van-cell__title) {
  font-size: 15px;
  color: #333;
}

:deep(.van-cell__icon) {
  color: #c0392b;
  font-size: 20px;
}

/* ===== 底部 ===== */
.footer-info {
  text-align: center;
  padding: 30px 0 10px 0;
}

.footer-info p {
  font-size: 12px;
  color: #bbb;
  margin: 0;
}
</style>