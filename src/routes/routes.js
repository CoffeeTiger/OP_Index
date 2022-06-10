const routes = [

    /* {
      path: '/',
      name: 'home',
      component: () => import('../views/home/home.vue')
    }, */ {
      path: '/',
      name: 'index',
      // component: () => import('../views/home/homeContent.vue')
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/about.vue')
    },
    {
      path: '/forParters',
      name: 'forParters',
      component: () => import('../views/forParters/index.vue')
    },
    {
      path: '/reward',
      name: 'reward',
      component: () => import('../views/reward/index.vue')
    },
    /* {
      path: '/homepage',
      name: 'homepage',
      component: () => import('../views/home/homePage.vue')
    }, {
      path: '/explorelist',
      name:'explorelist',
      meta:{name:'explorelist', requiresAuth: false},
      component: () => import('@/views/explore/exploreList.vue'),
    }, {
      path: '/nfts',
      name:'nfts',
      meta:{name:'nfts', requiresAuth: false},
      component: () => import('@/views/explore/nfts.vue'),
    }, {
      path: '/homeindex',
      name: 'homeindex',
      component: () => import('../views/home/HomeIndex.vue')
    }, {
      path: '/profile',
      meta:{name:'profile', requiresAuth: true},
      component: () => import('@/views/user/profile.vue'),
      children:[
        {
          path: '/original',
          name: 'original',
          meta:{name:'original', requiresAuth: true},
          component: () => import('@/views/user/original.vue')
        },{
          path: '/activity',
          name: 'activity',
          meta:{name:'activity', requiresAuth: true},
          component: () => import('@/views/user/activity.vue')
        },{
          path: '/listings',
          name: 'listings',
          meta:{name:'listings', requiresAuth: true},
          component: () => import('@/views/user/listings.vue')
        }
      ]
    }, {
      path: '/set',
      name: 'set',
      meta:{name:'set', requiresAuth: true},
      redirect:'setProfile',
      component: () => import('@/views/user/set.vue'),
      children:[
        {
          path: '/setProfile',
          name: 'setProfile',
          meta:{name:'setProfile', requiresAuth: true},
          component: () => import('@/views/user/setting/setProfile.vue')
        },{
          path: '/setLang',
          name: 'setLang',
          meta:{name:'setLang', requiresAuth: true},
          component: () => import('@/views/user/setting/setLang.vue')
        }
      ]
    }, {
      path: '/carouselTrade',
      name: 'carouselTrade',
      meta:{name:'carouselTrade', requiresAuth: false},
      component: () => import('@/views/user/carouselTrade.vue'),
    }, {
      path: '/trade',
      name: 'trade',
      meta:{name:'trade', requiresAuth: true},
      component: () => import('@/views/user/trade.vue'),
    }, {
      path: '/bought',
      name: 'bought',
      meta:{name:'bought', requiresAuth: false},
      component: () => import('@/views/user/bought.vue'),
    }, {
      path: '/create',
      name: 'create',
      meta:{name:'create', requiresAuth: true},
      component: () => import('@/views/create/create.vue'),
    }, {
      path: '/publishlist',
      name: 'publishlist',
      meta:{name:'publishlist', requiresAuth: true},
      component: () => import('@/views/publish/publishList.vue'),
    }, {
      path: '/publish',
      name: 'publish',
      meta:{name:'publish', requiresAuth: true},
      component: () => import('@/views/publish/publish.vue'),
    }, {
      path: '/rewards',
      name: 'rewards',
      meta:{name:'rewards', requiresAuth: false},
      component: () => import('@/views/rewards/rewards.vue'),
    }, {
      path: '/bond',
      name: 'bond',
      meta:{name:'bond', requiresAuth: false},
      component: () => import('@/views/bond/bond.vue'),
    }, {
      path: '/buybonds',
      name: 'buybonds',
      meta:{name:'buybonds', requiresAuth: false},
      component: () => import('@/views/bond/buybonds.vue'),
    }, {
      path: '/nologin',
      meta:{name:'nologin', requiresAuth: false},
      component: () => import('@/views/nologin/nologin.vue'),
    }, {
      path: '/userservice',
      name: 'userservice',
      meta:{name:'userservice', requiresAuth: false},
      component: () => import('@/views/footer/userservice.vue'),
    }, {
      path: '/userpriv',
      name: 'userpriv',
      meta:{name:'userpriv', requiresAuth: false},
      component: () => import('@/views/footer/userpriv.vue'),
    }, {
      path: '/swap',
      name: 'swap',
      meta:{name:'swap', requiresAuth: false},
      component: () => import('@/views/swap/swap.vue'),
    }, {
      path: '/message',
      name: 'message',
      meta:{name:'message', requiresAuth: false},
      component: () => import('@/views/user/message.vue'),
    }, {
      path: '/detail',
      name: 'detail',
      meta:{name:'detail', requiresAuth: false},
      component: () => import('@/views/user/detail.vue'),
    }, */
    // {
    // path: '*',
    // component: () => import('@/views/notFoundPage.vue'),
    // },

];

export default routes;
