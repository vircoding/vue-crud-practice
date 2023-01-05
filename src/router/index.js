import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/:id',
        name: 'edit',
        component: () => import('../views/EditView.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/SignUpView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (store.getters.logedGetter) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

export default router;
