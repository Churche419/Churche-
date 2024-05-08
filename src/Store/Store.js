
import { createStore } from 'vuex';
import axios from 'axios'
export default createStore({
    state: {
        users: [],
        selectedUser: [],
    },
    getters: {
        getUser:(state)=>(id)=>{
            return state.users.find(user=>user.id === id)
        }
    },
    mutations: {
        SET_USERS(state,users) {
            state.users = users;
        },
        SET_SELECTED_USER(state, user) {
            state.selectedUser = user;
        },
        add_User(state,user){
            state.user.unshift(user)
        },
        updUser(state,updUser){
            const index = state.users.findindex(user=>user.id===updUser.id)
            if(index !== -1){
                state.users.splice(index,1,updUser)
            }
        }
    },
    actions: {
        async fetchUsers({commit}) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            commit ("SET_USERS",response.data);
        },

        async fetchUserById({ commit }, id){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            commit ("SET_SELECTED_USER", response.data); 
            console.log(response.data)
        }
    },
});