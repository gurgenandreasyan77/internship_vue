import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/routes.js'

import {createRouter, createWebHistory} from 'vue-router'
import axios from "@/plugins/axios.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    if (to.meta?.middleware?.includes('auth')) {
        router.push({ name: 'home' })
    } else {
        next()
    }
})

const app = createApp(App)

app.use(axios)
app.use(router).mount('#app')
