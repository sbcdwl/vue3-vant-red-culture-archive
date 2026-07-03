<template>
  <div class="news-container">
    <!-- 顶部重点新闻 -->
    <div v-if="newsList.length > 0" class="featured-news">
      <div class="featured-image">
        <img :src="newsList[0].image" :alt="newsList[0].title" />
        <div class="featured-overlay">
          <span class="featured-tag">头条</span>
          <h3 class="featured-title">{{ newsList[0].title }}</h3>
          <p class="featured-date">{{ newsList[0].date }}</p>
        </div>
      </div>
      <p class="featured-summary">{{ newsList[0].content }}</p>
    </div>

    <div class="section-title">
      <span>更多资讯</span>
    </div>

    <!-- 中下部分新闻列表 -->
    <div class="news-list">
      <div
        v-for="item in newsList.slice(1)"
        :key="item.id"
        class="news-item"
      >
        <div class="news-item-content">
          <div class="news-text">
            <h4 class="news-title">{{ item.title }}</h4>
            <p class="news-summary">{{ item.content }}</p>
            <span class="news-date">{{ item.date }}</span>
          </div>
          <div class="news-thumb">
            <img :src="item.image" :alt="item.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const newsList = ref([])

onMounted(() => {
  const data = JSON.parse(localStorage.getItem('news')) || []
  newsList.value = data
})
</script>

<style scoped>
.news-container {
  min-height: 100vh;
  background: #f5f0eb;
  padding: 12px 16px 80px 16px;
}

/* ===== 顶部重点新闻 ===== */
.featured-news {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(192, 57, 43, 0.15);
  margin-bottom: 16px;
}

.featured-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px 16px 14px 16px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
}

.featured-tag {
  display: inline-block;
  background: #c0392b;
  color: white;
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 3px;
  margin-bottom: 6px;
}

.featured-title {
  color: white;
  font-size: 17px;
  font-weight: bold;
  margin: 4px 0 4px 0;
  line-height: 1.4;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}

.featured-date {
  color: rgba(255, 255, 255, 0.75);
  font-size: 12px;
  margin: 0;
}

.featured-summary {
  padding: 14px 16px;
  margin: 0;
  font-size: 14px;
  color: #444;
  line-height: 1.8;
  background: #fefcf9;
  text-align: justify;
}

/* ===== 标题 ===== */
.section-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #c0392b;
  padding: 14px 0 12px 0;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: #c0392b;
  margin: 6px auto 0;
  border-radius: 2px;
}

/* ===== 新闻列表 ===== */
.news-list {
  margin-top: 4px;
}

.news-item {
  background: white;
  border-radius: 10px;
  margin-bottom: 12px;
  padding: 14px;
  box-shadow: 0 1px 6px rgba(192, 57, 43, 0.08);
}

.news-item-content {
  display: flex;
  gap: 12px;
  align-items: stretch;
}

.news-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80px;
}

.news-title {
  font-size: 14px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0 0 6px 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-summary {
  font-size: 13px;
  color: #888;
  margin: 0 0 6px 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.news-date {
  font-size: 11px;
  color: #bbb;
}

.news-thumb {
  width: 100px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  background: #f0ece8;
  border: 1px solid #f0ece8;
}

.news-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>