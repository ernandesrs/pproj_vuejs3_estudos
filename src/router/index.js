import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from './../layouts/DefaultLayout'
import HomeView from './../views/HomeView.vue'

const routes = [
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{ path: '', name: 'index', component: HomeView }
		]
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
