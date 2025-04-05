// 09_vue(심화)
// 문제 2: 잘못된 요청이 온 경우 NotFound 페이지로 이동하도록 라우터 모듈을 수정하세요.


import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', name:'home', component: Home },
        { path: '/about', name:'about', component: About },
        { path: '/members', name:'members', component: Members, },
        { path: '/members/:id', name:'members/id', component: MemberInfo, beforeEnter:membersIdGuard },
        { path: '/videos', name:'videos', component: Videos, children : [{ path: ':id', name:'videos/id', component: VideoPlayer }]},
        { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
        
    ]
})

export default router;