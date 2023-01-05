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
        user: null,
    },
    getters: {
        logedGetter(state) {
            return !!state.user;
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
        setUserMutation(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        async setTodoAction({ commit, state }, todo) {
            try {
                await fetch(
                    `https://crud-practice-c1427-default-rtdb.firebaseio.com/todos/${state.user.localId}/${todo.id}.json?auth=${state.user.idToken}`,
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
        async deleteTodoAction({ commit, state }, id) {
            try {
                await fetch(
                    `https://crud-practice-c1427-default-rtdb.firebaseio.com/todos/${state.user.localId}/${id}.json?auth=${state.user.idToken}`,
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
        async updateTodoAction({ commit, state }, todo) {
            try {
                await fetch(
                    `https://crud-practice-c1427-default-rtdb.firebaseio.com/todos/${state.user.localId}/${todo.id}.json?auth=${state.user.idToken}`,
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
        async loadDataAction({ commit, state }) {
            try {
                const res = await fetch(
                    `https://crud-practice-c1427-default-rtdb.firebaseio.com/todos/${state.user.localId}.json?auth=${state.user.idToken}`,
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
        async signUpUserAction({ commit }, user) {
            try {
                const apiKey = 'AIzaSyCt9DVb_Q_UEL7JB45VZ7nNAR_ga96mFAc';
                const res = await fetch(
                    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true,
                        }),
                    }
                );
                const dataDB = await res.json();
                if (dataDB.error) {
                    return console.error(dataDB.error);
                }
                commit('setUserMutation', dataDB);
                router.push('/');
            } catch (error) {
                console.error(error);
            }
        },
        async loginUserAction({ commit }, user) {
            try {
                const apiKey = 'AIzaSyCt9DVb_Q_UEL7JB45VZ7nNAR_ga96mFAc';
                const res = await fetch(
                    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true,
                        }),
                    }
                );
                const dataDB = await res.json();
                if (dataDB.error) {
                    return console.error(dataDB.error);
                }
                commit('setUserMutation', dataDB);
                router.push('/');
            } catch (error) {
                console.error(error);
            }
        },
        logoutUserAction({ commit }) {
            commit('setUserMutation', null);
            router.push('/login');
        },
    },
});

