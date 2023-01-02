<script>
import NavBar from './components/NavBar.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        NavBar,
    },
    methods: {
        ...mapActions(['loadDataAction']),
    },
};
</script>

<template>
    <NavBar />
    <router-view />
</template>

