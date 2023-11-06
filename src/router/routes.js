import { createRouter, createWebHistory } from 'vue-router'
import { entry_point_dashboard } from "@/router/utils/entry_point_dashboard.js"


const router = createRouter({
    history: createWebHistory(),
    routes: entry_point_dashboard.concat([
        {
            path: '/',
            name: 'New_Team',
            component: () => import('@/pages/Dashboard_Management/index.vue')
        },
        ],
    )
})

export default router