<template>
    <div>
        <span class="hello">Hello World!</span>
        <router-link to="/about">About</router-link>
    </div>
</template>

<script lang="ts">
import HomeView from './home';
export default HomeView;
</script>

<style lang="scss">
    .hello {
        color: blue;
    }
</style>


