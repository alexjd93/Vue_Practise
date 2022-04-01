import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../components/Home/home.vue';
import MovieDetail from '../components/MovieDetail/movieDetail.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:id',
    name: 'MovieDetail',
    component: MovieDetail,
    props: ['id', 'backdrop_path', 'overview', 'title'],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
