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
        deleteTodoMutation(state, payload) {
            state.todos = state.todos.filter((item) => item.id !== payload);
        },
    },
    actions: {
        setTodoAction({ commit }, todo) {
            commit('setTodoMutation', todo);
        },
        deleteTodoAction({ commit }, id) {
            commit('deleteTodoMutation', id);
        },
    },
});

