import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

/* Layout */
import BlobLayout from '@/layout/blob'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'BlobIndex',
      component: BlobLayout,
      redirect: '/index/one',
      meta: { title: '首页', position: 'top-index' },
      children: [
        {
          path: 'one',
          name: 'one',
          component: () => import('@/views/blob'),
          meta: { title: '首页1', icon: 'table' }
        }
      ]
    },
    {
      path: '/blob',
      name: 'CommonBlob',
      component: BlobLayout,
      meta: { title: '博客', position: 'top-index' },
      children: [
        {
          path: 'one',
          name: 'one',
          component: () => import('@/views/blob'),
          meta: { title: '博客一', icon: 'table' }
        },
        {
          path: 'two',
          name: 'two',
          meta: { title: '博客二', icon: 'table' },
          //hidden: true
        }
      ]
    },
    {
      path: '/luntan',
      name: 'BlobIndex',
      component: BlobLayout,
      redirect: '/index/one',
      meta: { title: '论坛', position: 'top-index' },
      children: [
        {
          path: '/',
          name: 'one',
          component: () => import('@/views/blob'),
          meta: { title: '论坛1', icon: 'table' }
        }
      ]
    },
    {
      path: '/personal',
      name: 'BlobPersonal',
      component: BlobLayout,
      meta: { title: '我的', position: 'top-personal' },
      children: [
        {
          path: '/',
          name: 'BlobPersonal',
          component: () => import('@/views/blob/personal'),
          meta: { title: '个人空间', icon: 'table' }
        }
      ]
    }
  ]
})
