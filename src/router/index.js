import { createRouter, createWebHistory } from 'vue-router'
import HomeView      from '../views/HomeView.vue'
import EditProjectView from '../views/project/EditView.vue'
import CreateProjectView from '../views/project/AddView.vue'
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
      path: '/project/edit/:id ',
      name: 'project-edit',
      component: EditProjectView,
      props: true
    },
    {
      path: '/project/add ',
      name: 'project-add',
      component: CreateProjectView,
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
