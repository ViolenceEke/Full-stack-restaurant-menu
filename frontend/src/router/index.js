import {createRouter, createWebHistory} from 'vue-router'
import FoodPage from '../components/FoodPage.vue'
import MainPage from '../components/MainPage.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/admin',
            name: 'FoodPage',
            component: FoodPage
        }
    ]
})

export default router
