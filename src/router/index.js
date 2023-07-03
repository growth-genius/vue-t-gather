import { useAuthStore } from '@/store/auth';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/layout/default/IndexPage.vue'),
        children: [
            {
                path: '/',
                redirect: '/dashboard',
            },
            {
                path: '/dashboard',
                name: '대시보드',
                meta: { auth: true },
                component: () => import('@/views/DashBoard.vue'),
            },
            {
                path: 'travel',
                component: () => import('@/views/travel/DefaultTravel.vue'),
                children: [
                    {
                        path: 'register-group',
                        component: () => import('@/views/travel/RegisterTravelGroup.vue'),
                    },
                    {
                        path: 'search-group',
                        component: () => import('@/views/travel/SearchTravelGroup.vue'),
                    },
                ],
            },
        ],
    },
    {
        path: '/auth',
        component: () => import('@/layout/auth/IndexPage.vue'),
        children: [
            {
                path: 'sign-in',
                name: '로그인',
                meta: { auth: true },
                component: () => import('@/views/auth/SignIn.vue'),
            },
            {
                path: 'sign-up',
                name: '회원가입',
                meta: { auth: true },
                component: () => import('@/views/auth/SignUp.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const store = useAuthStore();
    if (!to.meta.auth && !store.isLogin) {
        next('/');
    }
    next();
});

export default router;
