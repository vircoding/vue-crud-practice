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
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodoMutation(state, payload) {
            state.todos = state.todos.filter((item) => item.id !== payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodoMutation(state, payload) {
            state.todos = state.todos.map((item) => (item.id === payload.id ? payload : item));
            localStorage.setItem('todos', JSON.stringify(state.todos));
            router.push('/');
        },
        loadDataMutation(state, payload) {
            state.todos = payload;
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
        loadDataAction({ commit }) {
            if (localStorage.getItem('todos')) {
                commit('loadDataMutation', JSON.parse(localStorage.getItem('todos')));
                return;
            }
            localStorage.setItem('todos', JSON.stringify([]));
        },
    },
});

