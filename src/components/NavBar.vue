<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'NavBar',
    computed: {
        ...mapGetters(['logedGetter']),
    },
    methods: {
        ...mapActions(['logoutUserAction']),
    },
};
</script>

<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand mb-0 h1">VIRcoding TODO App</router-link>
            <div class="d-flex">
                <router-link to="/" class="btn btn-outline-secondary btn-sm" v-if="logedGetter"
                    >Home</router-link
                >
                <router-link
                    to="/login"
                    class="btn btn-outline-secondary btn-sm ms-2"
                    v-if="!logedGetter"
                    >Log In</router-link
                >
                <router-link
                    to="/signup"
                    class="btn btn-outline-secondary btn-sm ms-2"
                    v-if="!logedGetter"
                    >Sign Up</router-link
                >
                <button
                    class="btn btn-outline-secondary btn-sm ms-2"
                    v-if="logedGetter"
                    @click="logoutUserAction"
                >
                    Log Out
                </button>
            </div>
        </div>
    </nav>
</template>
