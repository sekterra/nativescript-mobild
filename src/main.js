import Vue from 'nativescript-vue';
import router from './router';
// import './app.css';
import './styles.scss';


// sideDrawer 컴포넌트  전역에서 사용할 수 있도록 등록
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({
  router,
}).$start();
