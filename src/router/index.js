import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from './../layouts/DefaultLayout'
import SidebarLayout from './../layouts/SidebarLayout'
import HomeView from './../views/HomeView.vue'

const routes = [
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{ path: '', name: 'index', component: HomeView },
			{ path: 'sobre', name: 'about', component: HomeView },
		]
	},
	{
		path: '/me',
		component: SidebarLayout,
		children: [
			{ path: 'sidebar', name: 'sidebar', component: HomeView },
		]
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
