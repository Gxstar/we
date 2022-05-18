<script setup lang="ts">
import { ref } from "vue";

let articleList=ref({});

function add_a() {
    console.log('点了');
    console.log(articleList.value);
    // articleList.value={'id':1,'title':'test标题'};
    // console.log(articleList.value['title']);
}

</script>

<template>
<h4>最新文章</h4>
<section v-if="articleList.value=={}">
    <el-empty description="暂时没有文章" />
    <el-button @click="add_a">点击添加内容</el-button>
</section>
<section v-else>
    有货
    <el-button @click="add_a">点击添加内容</el-button>
</section>
</template>

<style scoped></style>