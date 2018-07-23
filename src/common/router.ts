import Router, { RouteConfig } from 'vue-router';
import Vue from 'vue';
import AboutView from '@/views/about/about.vue';
import HomeView from '@/views/home/home.vue';

Vue.use(Router);

const routes: RouteConfig[] = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView }
];

export default new Router({
    mode: 'history',
    routes,

});
