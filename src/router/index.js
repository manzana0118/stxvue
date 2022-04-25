import { createRouter, createWebHistory } from 'vue-router'
import HomeIndex from '@/page/HomeIndex.vue'


const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeIndex,
        }, 
        {
            path: '/company',
            name: 'Company',
            component: HomeIndex
        }, 
        {
            path: '/bussiness',
            name: 'Bussiness',
            component: HomeIndex
        }, 
        {
            path: '/cb',
            name: 'Cb',
            component: HomeIndex
        }, 
        {
            path: '/ad',
            name: 'Ad',
            component: HomeIndex
        }, 
        {
            path: '/cs',
            name: 'Cs',
            component: HomeIndex
        }, 
        {
            path: '/job',
            name: 'Job',
            component: HomeIndex
        }
    ]
});

export default router;