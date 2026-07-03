import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/personal',
        name: 'Personal',
        component: () => import('../views/Personal.vue')
    },
    {
        path: '/introduction',
        name: 'Introduction',
        component: () => import('../views/Introduction.vue')
    },
    
    {
        path: '/news',
        name: 'News',
        component: () => import('../views/News.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router