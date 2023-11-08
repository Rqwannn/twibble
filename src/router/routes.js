import { createRouter, createWebHistory } from 'vue-router'
import { entry_point_dashboard } from "@/router/utils/entry_point_dashboard.js"


const router = createRouter({
    history: createWebHistory(),
    routes: entry_point_dashboard.concat([
        {
            path: '/',
            name: 'New_Team',
            props: true,
            component: () => import('@/components/dashboard_management/entry_point/new_team.vue')
        },
        {
            path: '/team/:team_id',
            name: 'Team',
            props: true,
            component: () => import('@/components/dashboard_management/entry_point/new_team.vue')
        },
        {
            path: '/project/:team_id/project_id',
            name: 'Project',
            props: true,
            component: () => import('@/components/dashboard_management/entry_point/new_team.vue')
        },
        ],
    )
})

export default router