import { h } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

const homePage = {
    render: () => h('div', '首页'),
}

const PracticePage = {
    render: () => h('div', '曲谱练习'),
}

const RecordPage = {
    render: () => h('div', '学习记录')
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: homePage },
        { path: '/practice', component: PracticePage },
        { path: '/record', component: RecordPage }
    ]
})

export default router