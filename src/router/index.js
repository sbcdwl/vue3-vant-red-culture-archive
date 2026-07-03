import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/collection',
        name: 'Collection',
        component: () => import('../views/Collection.vue')
    },
    {
        path: '/collection/:id',
        name: 'CollectionDetail',
        component: () => import('../views/CollectionDetail.vue')
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('../views/News.vue')
    },
    {
        path: '/tour',
        name: 'Tour',
        component: () => import('../views/Tour.vue')
    },
    {
        path: '/personal',
        name: 'Personal',
        component: () => import('../views/Personal.vue')
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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router