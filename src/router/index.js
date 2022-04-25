import { createRouter, createWebHistory } from 'vue-router'
import HomeIndex from '@/page/HomeIndex.vue'


const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/stxvueweb/',
            name: 'Home',
            component: HomeIndex,
        }, 
        {
            path: '/stxvueweb/company',
            name: 'Company',
            component: HomeIndex
        }, 
        {
            path: '/stxvueweb/bussiness',
            name: 'Bussiness',
            component: HomeIndex
        }, 
        {
            path: '/stxvueweb/cb',
            name: 'Cb',
            component: HomeIndex
        }, 
        {
            path: '/stxvueweb/ad',
            name: 'Ad',
            component: HomeIndex
        }, 
        {
            path: '/stxvueweb/cs',
            name: 'Cs',
            component: HomeIndex
        }, 
        {
            path: '/stxvueweb/job',
            name: 'Job',
            component: HomeIndex
        }
    ]
});

export default router;