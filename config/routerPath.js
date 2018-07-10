/**
 * vue-route가 경로를 참조할 수 있는 path와 vue.js 파일간의 mapping
 */
import Home from '../src/components/Home';
import HelloWorld from '../src/components/HelloWorld';
import SideDrawer from '../src/samples/SideDrawer'; // side drawer 샘플 페이지
import CommonControls from '../src/samples/CommonControls';

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/hello',
    component: HelloWorld,
    meta: {
      title: 'Hello World',
    },
  },
  {
    path: '/samples/sideDrawer',
    component: SideDrawer,
    meta: {
      title: 'SideDrawer',
    },
  },
  {
    path: '/samples/commonControls',
    component: CommonControls,
    meta: {
      title: 'CommonControls',
    },
  },
  {path: '*', redirect: '/home'},
]