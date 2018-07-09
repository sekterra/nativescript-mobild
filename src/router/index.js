import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import RouterPath from '../../config/routerPath.js';

const router = new VueRouter({
  pageRouting: true,
  routes: RouterPath,
});

router.replace('/home');

module.exports = router;
