import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import Recordings from '../views/Recordings.vue'
import Preview from '../views/Preview.vue'

const routes = [
    {
        path: '/',
        redirect: 'my-recordings',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/my-recordings',
        name: 'Recordings',
        component: Recordings
    },
    {
        path: '/preview',
        name: 'Preview',
        component: Preview
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
