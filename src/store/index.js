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
        loadDataMutation(state, payload) {
            state.todos = payload;
        },
    },
    actions: {
        async setTodoAction({ commit }, todo) {
            try {
                await fetch(
                    `https://crud-practice-c1427-default-rtdb.firebaseio.com/todos/${todo.id}.json`,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(todo),
                    }
                );
                commit('setTodoMutation', todo);
            } catch (error) {
                console.error(error);
            }
        },
        async deleteTodoAction({ commit }, id) {
            try {
                await fetch(
                    `https://crud-practice-c1427-default-rtdb.firebaseio.com/todos/${id}.json`,
                    {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                commit('deleteTodoMutation', id);
            } catch (error) {}
        },
        async updateTodoAction({ commit }, todo) {
            try {
                await fetch(
                    `https://crud-practice-c1427-default-rtdb.firebaseio.com/todos/${todo.id}.json`,
                    {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(todo),
                    }
                );
                commit('updateTodoMutation', todo);
            } catch (error) {
                console.error(error);
            }
        },
        async loadDataAction({ commit }) {
            try {
                const res = await fetch(
                    'https://crud-practice-c1427-default-rtdb.firebaseio.com/todos.json',
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                const rawData = await res.json();
                const data = [];
                for (const key in rawData) {
                    data.push(rawData[key]);
                }
                commit('loadDataMutation', data);
            } catch (error) {
                console.error(error);
            }
        },
    },
});

