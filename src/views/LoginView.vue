<script>
import { mapActions } from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    computed: {
        disableButton() {
            if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) &
                (this.password.length >= 6)
            )
                return false;
            return true;
        },
    },
    methods: {
        ...mapActions(['loginUserAction']),
        loginUser() {
            this.loginUserAction({ email: this.email, password: this.password });
            this.email = '';
            this.password = '';
        },
    },
};
</script>

<template>
    <div class="container">
        <h1 class="mt-4">Login User</h1>
        <form @submit.prevent="loginUser">
            <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email address"
                v-model.trim="email"
            />
            <input
                type="password"
                class="form-control mt-2"
                placeholder="Add a password"
                v-model.trim="password"
            />
            <div class="d-grid gap-2 mt-2">
                <button class="btn btn-dark" type="submit" :disabled="disableButton">Login</button>
            </div>
        </form>
    </div>
</template>
