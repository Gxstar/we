import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'home',
        component:() => import("/src/views/home.vue")
    },
    {
        path: "/c/:id",
        name: "posts",
        component:() => import("/src/views/posts.vue")
    }
]

const router = createRouter({
    // history 模式 这里使用createWebHistory
    history: createWebHistory(),
    // 传递路由映射表
    routes: routes
})

export default router