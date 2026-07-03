<template>
    <div class="home-container">
        <div class="header">
            <h1>欢迎来到红色文化收藏档案馆</h1>
            <p class="subtitle">传承红色基因 · 弘扬革命精神</p>
            <div class="badge">
                <span>免费参观时间:</span>
                <span>9:00-17:00</span>
            </div>
        </div>

        <div class="intro-text">
            <p>本馆致力于收集、保护和展示中国共产党领导下的革命历史文物，</p>
            <p>让每一件藏品讲述峥嵘岁月中的红色故事。</p>
        </div>

        <div class="stats">
            <div class="stat-item">
                <span class="num">5000+</span>
                <span class="label">馆藏文物</span>
            </div>
            <div class="stat-item">
                <span class="num">100+</span>
                <span class="label">珍贵藏品</span>
            </div>
            <div class="stat-item">
                <span class="num">100万+</span>
                <span class="label">年接待游客</span>
            </div>
        </div>

        <Introduction />
    </div>
</template>

<script setup>
import Introduction from './Introduction.vue'
</script>

<style scoped>
.home-container {
    padding: 16px;
    padding-bottom: 60px;
}

.header {
    text-align: center;
    padding: 20px 16px;
    background: linear-gradient(135deg, #fff5f5 0%, #ffffff 100%);
    border-radius: 12px;
    margin-bottom: 16px;
}

h1 {
    color: #c0392b;
    font-size: 22px;
    margin: 0 0 8px 0;
}

.subtitle {
    color: #666;
    font-size: 14px;
    margin: 0 0 12px 0;
    letter-spacing: 2px;
}

.badge {
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 13px;
    color: #555;
    background: #f5f5f5;
    padding: 6px 12px;
    border-radius: 20px;
}

.intro-text {
    background: #fff9f7;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    border-left: 4px solid #c0392b;
}

.intro-text p {
    margin: 4px 0;
    font-size: 14px;
    color: #333;
    line-height: 1.8;
}

.stats {
    display: flex;
    justify-content: space-around;
    background: white;
    border-radius: 12px;
    padding: 16px 0;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.stat-item {
    text-align: center;
}

.num {
    display: block;
    font-size: 20px;
    font-weight: bold;
    color: #c0392b;
}

.label {
    font-size: 12px;
    color: #999;
}
</style>