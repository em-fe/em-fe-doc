import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import loadcomponents from '@/tools/loadcomponents';
// 分模块的路由
import doc from './doc';

Vue.use(Router);

const VueRouter = new Router({
  routes: [
    {
      path: '/doc',
      name: 'Doc',
      children: doc,
      component: loadcomponents.load('Doc', 'views'),
    },
    {
      path: '/',
      name: 'Home',
      component: loadcomponents.load('Home', 'views'),
    },
  ],
});

// 路由开始之前的全局函数
VueRouter.beforeEach((to, from, next) => {
  // 进入条开始检测
  NProgress.start();
  next();
});

// 路由结束之后的全局函数
VueRouter.afterEach(() => {
  // 进度条完成
  NProgress.done();
});

export default VueRouter;
