// 09_vue(심화2)
// 문제 3: 다음 조건을 만족하는 라우트 수준의 가드를 추가하세요.
//  o 이전 경로가 members, /members:id인 경우만 members/:id 경로로 이동

import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'

const membersIdGuard = (to, from) => {
    if (from.name !== "members" && from.name !== "members/id") {
        return false;
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', name:'home', component: Home },
        { path: '/about', name:'about', component: About },
        { path: '/members', name:'members', component: Members },
        { path: '/members/:id', name:'members/id', component: MemberInfo, beforeEnter:membersIdGuard },
        { path: '/videos', name:'videos', component: Videos, children : [{ path: ':id', name:'videos/id', component: VideoPlayer }]},
    ]
})