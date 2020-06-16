import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

Vue.prototype.$axios = axios;
// const apiRootPath = process.env.NODE_ENV !== 'production' ? 'http://localhost:4444/api' : '/api';
const apiRootPath = process.env.NODE_ENV !== 'production' ? 'http://172.26.115.222:4444/api' : '/api';
Vue.prototype.$apiRootPath = apiRootPath;
axios.defaults.baseURL = apiRootPath;
console.log(axios.defaults.baseURL);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
