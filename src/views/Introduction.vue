<template>
    <div class="introduction-container">
        <van-card :thumb="imageUrl" title="红色文化收藏档案馆" desc="传承红色基因 · 弘扬革命精神">
            <template #tags>
                <van-tag plain type="danger">国家三级博物馆</van-tag>
                <van-tag plain type="warning">爱国主义教育基地</van-tag>
            </template>

            <template #footer>
                <div class="intro-content">
                    <span>
                                红色文化收藏档案馆成立于2005年，坐落于革命老区核心地带，占地面积12000平方米。
                        馆藏革命文物5000余件，涵盖土地革命、抗日战争、解放战争等各个历史时期。
                        本馆以"传承红色基因，弘扬革命精神"为宗旨，常年举办红色主题展览、革命传统教育及爱国主义研学活动，
                        是集收藏、研究、展示、教育于一体的综合性红色文化场馆。
                        开馆至今已累计接待游客超过100万人次，成为传承红色文化的重要阵地。
                    </span>
                </div>
            </template>
        </van-card>
    </div>
</template>

<script setup>
import imageUrl from '../assets/Introduction-1.jpg'
</script>


<style scoped>
/* 让文字对齐吧！ */
.intro-content {
    text-align: left !important;
}
</style>