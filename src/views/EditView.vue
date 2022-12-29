<script>
import Form from '@/components/Form.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'EditView',
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
    computed: {
        ...mapState(['todos']),
    },
    methods: {
        ...mapActions(['updateTodoAction']),
    },
    created() {
        this.todo = this.todos.find((item) => item.id === this.$route.params.id);
    },
};
</script>

<template>
    <div class="container">
        <h1 class="mt-4">
            Edit
            <span class="display-6">{{ todo.name }}</span>
            Todo:
        </h1>
        <form @submit.prevent="updateTodoAction(todo)">
            <Form :todo="todo" />
        </form>
    </div>
</template>
