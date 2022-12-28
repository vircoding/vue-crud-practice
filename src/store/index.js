import { createStore } from 'vuex';

export default createStore({
    state: {
        todos: [],
        todo: {
            id: '',
            name: '',
            state: '',
        },
    },
    mutations: {
        setTodoMutation(state, payload) {
            state.todos.push(payload);
        },
    },
    actions: {
        setTodo({ commit }, todo) {
            commit('setTodoMutation', todo);
        },
    },
});

