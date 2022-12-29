<script>
import Form from '@/components/Form.vue';
import Table from '@/components/Table.vue';
import { mapActions } from 'vuex';
import { nanoid } from 'nanoid';

export default {
    name: 'HomeView',
    components: {
        Form,
        Table,
    },
    data() {
        return {
            todo: {
                id: '',
                name: '',
                status: '',
            },
        };
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
        <Table />
    </div>
</template>

