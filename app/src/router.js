import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Structures from './components/structures/Structures.vue';
import StructureDetail from './components/structure/StructureDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/', 
      component: Home },
    { path: '/structures', 
      component: Structures },
    {
      path: '/structure/:key',
      component: StructureDetail,
    },
    { path: '*', 
      redirect: '/' },
  ]
});