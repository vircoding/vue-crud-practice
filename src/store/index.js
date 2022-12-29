import { createStore } from 'vuex';
import router from '../router';

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
        updateTodoMutation(state, payload) {
            state.todos = state.todos.map((item) => (item.id === payload.id ? payload : item));
            router.push('/');
        },
    },
    actions: {
        setTodoAction({ commit }, todo) {
            commit('setTodoMutation', todo);
        },
        deleteTodoAction({ commit }, id) {
            commit('deleteTodoMutation', id);
        },
        updateTodoAction({ commit }, todo) {
            commit('updateTodoMutation', todo);
        },
    },
});

