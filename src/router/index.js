import HomePage from "@/components/HomePage.vue";
import AppLayout from "@/components/layouts/AppLayout.vue";
import GuestLayout from "@/components/layouts/GuestLayout.vue";
import LoginPage from "@/components/LoginPage.vue";
import NotFound from "@/components/NotFound.vue";
import ProductsPage from "@/components/ProductsPage.vue";
import store from "@/store";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/auth/',
        component: GuestLayout,
        children: [
            { path: 'login', component: LoginPage }
        ],
    },
    {
        path: '/',
        component: AppLayout,
        children: [
            { path: '', component: HomePage },
            { path: '/products', component: ProductsPage }
        ],
        meta: { requiresAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
  const isAuth = store.getters.isAuth;

  if (to.path.startsWith('/auth/') && isAuth) {
      next('/');
  } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuth) {
      next('/auth/login');
  } else {
      next();
  }
});

export default router;
