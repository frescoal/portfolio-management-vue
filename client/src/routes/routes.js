import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages

const routes = [
  {
    path: '/',
    component: DashboardLayout,
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
  },
  {path: '*', component: NotFound}
];

export default routes
