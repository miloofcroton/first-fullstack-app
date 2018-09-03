import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Cities from './components/cities/Cities.vue';
import CityDetail from './components/city/CityDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/', 
      component: Home },
    { path: '/cities', 
      component: Cities },
    {
      path: '/city/:key',
      component: CityDetail,
    },
    { path: '*', 
      redirect: '/' },
  ]
});