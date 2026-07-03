<template>
  <div class="tour-container">
    <div class="page-title">
      <span>红色旅游地点</span>
    </div>

    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="已加载全部旅游地点"
      class="tour-list"
    >
      <div v-for="item in tourList" :key="item.id" class="tour-card">
        <div class="tour-image">
          <img :src="item.img" :alt="item.place" />
        </div>
        <div class="tour-info">
          <h3 class="tour-name">{{ item.place }}</h3>
          <div class="tour-tags">
            <span class="tag red">红色景点</span>
            <span class="tag orange">爱国主义教育基地</span>
          </div>
          <p class="tour-desc">{{ item.desc }}</p>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const tourList = ref([])
const loading = ref(false)
const finished = ref(true)

onMounted(() => {
  const data = JSON.parse(localStorage.getItem('tour')) || []
  tourList.value = data
})
</script>

<style scoped>
.tour-container {
  min-height: 100vh;
  background: #f5f0eb;
  padding: 12px 16px 80px 16px;
}

.page-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #c0392b;
  padding: 16px 0 16px 0;
  position: relative;
}

.page-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: #c0392b;
  margin: 8px auto 0;
  border-radius: 2px;
}

.tour-list {
  background: transparent;
}

.tour-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(192, 57, 43, 0.1);
}

.tour-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.tour-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tour-info {
  padding: 14px 16px 16px 16px;
}

.tour-name {
  font-size: 17px;
  font-weight: bold;
  color: #c0392b;
  margin: 0 0 8px 0;
}

.tour-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.tag {
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 3px;
}

.tag.red {
  color: #c0392b;
  border: 1px solid #c0392b;
  background: #fff5f5;
}

.tag.orange {
  color: #e67e22;
  border: 1px solid #e67e22;
  background: #fef9f0;
}

.tour-desc {
  font-size: 14px;
  color: #555;
  line-height: 1.8;
  margin: 0;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>