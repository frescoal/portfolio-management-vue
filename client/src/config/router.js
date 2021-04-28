import VueRouter from "vue-router";
import NotFound from '../screens/NotFoundPage.vue'
import Login from "../screens/Login";
import AccountsIndex from "../screens/Accounts/AccountsIndex";
import AccountNew from "../screens/Accounts/AccountNew";
import {userService} from "@/services";
import Dashboard from "@/screens/Dashboard";

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    alias: '/'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      layout: Login
    }
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: AccountsIndex
  },
  {
    path: '/accounts/new',
    name: 'New accounts',
    component: AccountNew
  },
  {path: '*', component: NotFound}
];

const router = new VueRouter({
  routes,
  mode: 'history',
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
