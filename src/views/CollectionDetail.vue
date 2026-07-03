<template>
    <div v-if="currentItem">
        <van-card :title="currentItem.name" :desc="`年代：${currentItem.year}`" :thumb="currentItem.image" />
        <p>{{ currentItem.description }}</p>
        <p>{{ currentItem.historicalValue }}</p>
    </div>
    <div v-else>
        <van-loading>加载中</van-loading>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const collectionsInfo = ref(JSON.parse(localStorage.getItem('collections')) || [])

const router = useRouter()

//获取当前推送过来的id
const id = Number(router.currentRoute.value.params.id)  //这个id是字符，下面的item.id是数字，所以这里要转成数字
/**
 * 获取路由参数的方法：
 * 1、通过useRoute()时，要这样写：router.currentRoute.value.params
 * 2、通过useRoute()时，要这样写：route.params.id;
 */


//根据id查找对应的商品信息
const currentItem = collectionsInfo.value.find(item => item.id === id)  //可以不用ref包裹
/**
 * 1、find函数，就是传入一个元素，返回第一个满足条件的元素
 * 2、item => item.id === id就是把localstorage里的id和路由传过来的id进行比较，
 * 然后返回相等的那一个作为find函数的参数
 * 3、这样find就能返回id对应的那整一个对象，然后赋值给currentItem就是了
 */ 


</script>

<style scoped></style>