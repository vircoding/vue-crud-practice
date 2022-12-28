<script>
export default {
    name: 'Form',
    props: {
        todo: Object,
    },
    computed: {
        disableButton() {
            return this.todo.name.length && this.todo.status;
        },
    },
};
</script>

<template>
    <input class="form-control" type="text" v-model.trim="todo.name" placeholder="Name" />
    <div class="form-check form-check-inline mt-2">
        <input
            class="form-check-input"
            type="radio"
            id="urgent"
            value="Urgent"
            v-model="todo.status"
        />
        <label class="form-check-label" for="urgent"> Urgent </label>
    </div>
    <div class="form-check form-check-inline">
        <input
            class="form-check-input"
            type="radio"
            id="relax"
            value="Relax"
            v-model="todo.status"
        />
        <label class="form-check-label" for="relax"> Relax </label>
    </div>
    <div class="d-grid gap-2 mt-2">
        <button class="btn btn-dark" type="submit" :disabled="!disableButton">Enter</button>
    </div>
</template>
