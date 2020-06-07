import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/optin.vue';
import Thanks from '../views/thankYou.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks,
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
