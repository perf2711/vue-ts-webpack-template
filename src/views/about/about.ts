import { Component } from 'av-ts';
import Vue from 'vue';

@Component({
    name: 'aboutView'
})
export default class AboutView extends Vue {
    public back() {
        this.$router.back();
    }
}
