<script>
import Form from '@/components/Form.vue';
import { mapActions } from 'vuex';
import { nanoid } from 'nanoid';
// Only for testing purposes
import { mapState } from 'vuex';

export default {
    name: 'HomeView',
    data() {
        return {
            todo: {
                id: '',
                name: '',
                status: '',
            },
        };
    },
    components: {
        Form,
    },
    methods: {
        ...mapActions(['setTodo']),
        sendData(todo) {
            // Generate Id
            this.todo.id = nanoid();

            this.setTodo(todo);

            // Restart Todo
            this.todo = {
                id: '',
                name: '',
                status: '',
            };
        },
    },
    computed: {
        ...mapState(['todos']),
    },
};
</script>

<template>
    <div class="container">
        <h5 class="mt-4 fs-1">Form</h5>
        <form @submit.prevent="sendData(todo)">
            <Form :todo="todo" />
        </form>
    </div>
    <hr />
    <p>{{ todos }}</p>
</template>

