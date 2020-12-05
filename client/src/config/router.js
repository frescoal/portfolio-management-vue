import VueRouter from "vue-router";
import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
import NotFound from '../screens/NotFoundPage.vue'
import Login from "../screens/Login";
import {userService} from "@/services";

const routes = [
  {
    path: '/',
    component: DashboardLayout,
  },
  {
    path: '/admin',
    component: DashboardLayout,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {path: '*', component: NotFound}
];

const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = userService.loggedIn();

  if (authRequired && !loggedIn) return next('/login');

  next();
})

export default router;
