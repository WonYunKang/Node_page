import Vue from 'vue'
import Router from 'vue-router'

import { 
  HelloWorld,
  PostContainer,
  Posts,
  PostDetail,
  PostEdit,
  Users,
  UserDetail
} from '@/components/containers'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
    },

    {
      path: '/posts/:id',
      name: 'PostDetail',
      component: PostDetail,
    },
    
    {
      path: '/edit/:id',
      name: 'PostEdit',
      component: PostEdit,
    },
    
    
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'UserDetail',
      component: UserDetail
    },
    


  ]
})
