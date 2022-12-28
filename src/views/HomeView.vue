<script>
import Form from '@/components/Form.vue';
import Table from '@/components/Table.vue';
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
    computed: {
        ...mapState(['todos']),
    },
};
</script>

<template>
    <div class="container">
        <h5 class="mt-4 fs-1">Insert a Todo</h5>
        <form @submit.prevent="setTodo(todo)">
            <Form :todo="todo" />
        </form>
        <!-- Only for testing purposes -->
        <hr class="mt-5" />
        <Table />
    </div>
</template>

