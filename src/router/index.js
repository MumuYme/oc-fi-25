import { createRouter, createWebHistory } from 'vue-router';
import Top from '../components/Top.vue'; 
import Department from '../components/Department.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'index',
            component: Top,
        },
        {
            path: '/department',
            name: 'department',
            component: Department,
        }
    ]
})


// 3. ルーターインスタンスをエクスポート
export default router;