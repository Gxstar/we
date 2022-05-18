<script lang="ts" setup>
import { ref } from 'vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const logoUrl=ref('/src/assets/logo.jpg')
const cats=ref([
    {'id':'1','title':'工作','count':3},
    {'id':'2','title':'生活','count':5},
    {'id':'3','title':'旅程','count':2}
])
</script>

<template>
    <el-menu default-active="2" style="text-align: center;border-radius: 10px;" @open="handleOpen" @close="handleClose">
        <el-avatar :size="100" :src="logoUrl" class="avatar" title="logo"></el-avatar>
        <h4>阿星的小站</h4>
        <el-menu-item>
            <router-link class="cat-link" to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item v-for="cat in cats">
            <router-link class="cat-link" :to="'/c/'+cat.id">{{cat.title}}</router-link>
            <!-- <el-tag>{{cat.count}}</el-tag> -->
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
.avatar{
    margin-top: 1.33em;
}
.cat-link{
    margin: 0 auto;
    text-decoration: none;
    color:var(--el-text-color-primary);
}
</style>