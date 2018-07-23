import '@/styles/site.scss';
import Vue from 'vue';
import App from '@/app.vue';
import router from '@/common/router';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
