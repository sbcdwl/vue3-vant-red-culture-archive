<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in collectionsInfo" :key="item.id">
                <img :src="item.image" :alt="item.name" />
            </van-swipe-item>
        </van-swipe>
    </div>

    <hr />

    <div class="grid-title">
        <span>馆藏精品</span>
    </div>

    <div>
        <van-grid :column-num="3" class="collection-grid">
            <van-grid-item v-for="item in collectionsInfo" :key="item.id" class="grid-item">
                <div class="grid-content">
                    <img :src="item.image" :alt="item.name" />
                    <span class="grid-name">{{ item.name }}</span>
                </div>
            </van-grid-item>
        </van-grid>
    </div>

    <hr />
</template>

<script setup>
import { ref } from 'vue'
const collectionsInfo = ref(JSON.parse(localStorage.getItem('collections')) || [])
</script>

<style scoped>
.my-swipe {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(192, 57, 43, 0.2);
}

.my-swipe .van-swipe-item {
    height: 180px;
    background-color: #f0f0f0;
}

.my-swipe .van-swipe-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

hr {
    border: 1px solid #c0392b;
    margin: 20px 0;
}

.grid-title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #c0392b;
    padding: 10px 0 6px 0;
    position: relative;
}

.grid-title::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background: #c0392b;
    margin: 6px auto 0;
    border-radius: 2px;
}

.collection-grid {
    padding: 4px 0;
}

.grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
}

.grid-content img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid #c0392b;
}

.grid-name {
  font-size: 12px;
  color: #333;
  margin-top: 8px;
  text-align: center;
  max-width: 80px;
  word-break: break-all;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>