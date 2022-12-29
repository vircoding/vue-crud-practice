<script>
import Form from '@/components/Form.vue';
import Table from '@/components/Table.vue';
import { mapActions } from 'vuex';
import { nanoid } from 'nanoid';

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
        Table,
    },
    methods: {
        ...mapActions(['setTodoAction']),
        setTodo(todo) {
            // Generate Id
            this.todo.id = nanoid();

            this.setTodoAction(todo);

            // Restart Todo
            this.todo = {
                id: '',
                name: '',
                status: '',
            };
        },
    },
};
</script>

<template>
    <div class="container">
        <h1 class="mt-4">Insert a Todo</h1>
        <form @submit.prevent="setTodo(todo)">
            <Form :todo="todo" />
        </form>
        <hr class="mt-5" />
        <Table />
    </div>
</template>

