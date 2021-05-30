import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//基础导航
export const baseRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/About.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../docs/test.md')
    }
]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: baseRoutes
})

const router = createRouter()

export default router
