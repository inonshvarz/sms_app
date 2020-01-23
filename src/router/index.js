import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Sms from '../views/Sms.vue';
import store from '../store';
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Login
  },
  {
    path: '/send-sms',
    component: Sms,
    // beforeEnter(to, from, next) {
    //   if (!store.state.employeeId) {
    //     next('/')
    //   }
    // },

  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router;