<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Table',
    computed: {
        ...mapState(['todos']),
    },
    methods: {
        ...mapActions(['deleteTodoAction']),
    },
};
</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in todos" :key="item.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.status }}</td>
                <td>
                    <div
                        class="btn-group btn-group-sm"
                        role="group"
                        aria-label="Small button group"
                    >
                        <button
                            @click="deleteTodoAction(item.id)"
                            type="button"
                            class="btn btn-danger"
                        >
                            Delete
                        </button>
                        <router-link :to="`/${item.id}`" class="btn btn-success">Edit</router-link>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
