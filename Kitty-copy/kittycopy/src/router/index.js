import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: resolve => require(['@/package/home'], resolve),
      children: [
        {
          path: '/main',
          name: '系统介绍',
          component: resolve => require(['@/package/Main'], resolve)
        },
        {
          path: '/user',
          name: '用户管理',
          component: resolve => require(['@/package/User'], resolve)
        },
        {
          path: '/menu',
          name: '菜单管理',
          component: resolve => require(['@/package/Menu'], resolve)
        },
        {
          path: '/dept',
          name: '机构管理',
          component: resolve => require(['@/package/SysMng/Dept'], resolve)
        },
        {
          path: '/role',
          name: '角色管理',
          component: resolve => require(['@/package/SysMng/Role'], resolve)
        },
        {
          path: '/log',
          name: '日志管理',
          component: resolve => require(['@/package/SysMng/Log'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/package/Login'], resolve)
    },
    {
      path: '/404',
      name: 'error',
      component: resolve => require(['@/package/404'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem('user')
  if(to.path == '/login') {
    if(user) {
      next({ path: '/' })
    }else {
      next()
    }
  }else {
    if(!user) {
      next({ path: '/login' })
    }else {
      next()
    }
  }
})

export default router