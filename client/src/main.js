import Vue from 'vue'
import './pollyfills'
import VueRouter from 'vue-router'
import VueNotify from 'vue-notifyjs'
import VeeValidate from 'vee-validate'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import App from './App.vue'
import router from './config/router.js'
import { store } from './store'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import SideBar from './components/UIComponents/SidebarPlugin'
import initProgress from './progressbar';

// library imports
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/paper-dashboard.scss'
import './assets/sass/demo.scss'
import './assets/sass/netos.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import sidebarLinks from './sidebarLinks'
import './registerServiceWorker'
import i18n from './i18n'
// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalDirectives)
Vue.use(GlobalComponents)
Vue.use(VueNotify)
Vue.use(SideBar, { sidebarLinks: sidebarLinks })
Vue.use(VeeValidate)
locale.use(lang)

// Authorize console.log in views
Vue.prototype.$log = console.log;

initProgress(router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  i18n,
  router
})
