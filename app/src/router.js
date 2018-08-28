import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Structures from './components/structures/Structures.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/structures', component: Structures },
    { path: '*', redirect: '/' }
  ]
});