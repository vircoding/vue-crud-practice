<script>
import { mapActions } from 'vuex';

export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: '',
            passwordReply: '',
        };
    },
    computed: {
        disableButton() {
            if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) &
                (this.password.length >= 6) &
                (this.password === this.passwordReply)
            )
                return false;
            return true;
        },
    },
    methods: {
        ...mapActions(['setUserAction']),
        setUser() {
            this.setUserAction({ email: this.email, password: this.password });
            this.email = '';
            this.password = '';
            this.passwordReply = '';
        },
    },
};
</script>

<template>
    <div class="container">
        <h1 class="mt-4">Insert a Todo</h1>
        <form @submit.prevent="setUser">
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
            <input
                type="password"
                class="form-control mt-2"
                placeholder="Repeat the password"
                v-model.trim="passwordReply"
            />
            <div class="d-grid gap-2 mt-2">
                <button class="btn btn-dark" type="submit" :disabled="disableButton">
                    Sign Up
                </button>
            </div>
        </form>
    </div>
</template>
