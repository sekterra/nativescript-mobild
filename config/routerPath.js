/**
 * vue-route가 경로를 참조할 수 있는 path와 vue.js 파일간의 mapping
 */
import Home from '../src/components/Home';
import HelloWorld from '../src/components/HelloWorld';

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
  {path: '*', redirect: '/home'},
]