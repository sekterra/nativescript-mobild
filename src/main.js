import Vue from 'nativescript-vue';
import router from './router';
// import FloatLabel from './components/FloatLabel';
// import './app.css';
import './styles.scss';


/* 전역 컴포넌트 등록 */
// sideDrawer 컴포넌트  전역에서 사용할 수 있도록 등록
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);
/* END:전역 컴포넌트 등록 */

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;



new Vue({
  router,
}).$start();
