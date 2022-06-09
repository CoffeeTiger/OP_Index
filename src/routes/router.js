import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location, onResolve, onReject) {undefined
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {

    /* console.info('router to=' + to.fullPath)
    console.info('router from=' + from.fullPath)
    console.info('meta = '+from.meta) */

    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  /* console.info('router to=' + to.fullPath)
  console.info('router from=' + from.fullPath)
  console.info('meta = '+from.meta) */

  let requiresAuth = to.meta.requiresAuth
  if (requiresAuth==undefined || requiresAuth == null || requiresAuth == false) {
    next()
  } else{
    let token = sessionStorage.getItem("token")
    if(token == null || token == ''){
      next({path:'/nologin', params:{}})
    } else {
      next()
    }
  }
})

export default router;
