<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="photo-o" to="/collection">藏品展示</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/news">新闻资讯</van-tabbar-item>
      <van-tabbar-item icon="location-o" to="/tour">旅游地点售卖</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/personal">个人主页</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>