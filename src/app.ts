import { Component , Vue } from 'av-ts';
import HomeView from '@/views/home/home.vue';

@Component({
    name: 'app',
    components: {
        'home-view': HomeView
    }
})
export default class App extends Vue {

}
