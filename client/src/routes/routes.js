import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
import Login from "../components/Dashboard/Views/Pages/Login";
// Dashboard pages

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

export default routes
