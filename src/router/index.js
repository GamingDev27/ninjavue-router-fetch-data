import { createRouter, createWebHistory } from 'vue-router'
import HomeView      from '../views/HomeView.vue'
import JobView       from '../views/job/JobView.vue'
import JobDetailView from '../views/job/JobDetailView.vue'
import NotFoundView       from '../views/404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    { 
      path: '/jobs',
      name: 'job',
      component: JobView,
    },
    {
      path: '/jobs/:id ',
      name: 'job-detail',
      component: JobDetailView,
      props: true
    },

    //redirect
    {
      path: '/all-jobs',
      redirect: { name: 'job' }
    },
    //404
    { 
      path: '/:catchAll(.*)',
      component: NotFoundView
    }
  ],
})

export default router
