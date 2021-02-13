import Vue from "vue";
import Vuex from "vuex";
import {
  personsUrl,
  userUrl,
  msgConexionFetchError,
  msgParseFetchError,
  msgUserFound,
  msgUserNotFound
} from "../assets/js/urls";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    personas: [],
    users: []
  },
  mutations: {
    setPersons(state, payload) {
      state.personas = payload.person;
      console.log(state.personas)
    },
    setUsers(state, payload){
      state.users = payload.user
    }
  },
  actions: {
    getAllPerons({ commit }) {
      fetch(personsUrl)
        .then(res => res.json())
        .catch(err => console.log(msgConexionFetchError, err))
        .then((person) => commit("setPersons", { person }))
        .catch(error => console.log(msgParseFetchError, error));
    },
    getAllUsers({ commit }){
      fetch(userUrl)
        .then(res => res.json())
        .catch(err => console.log(msgConexionFetchError, err))
        .then((user) => commit("setUsers", { user }))
        .catch(error => console.log(msgParseFetchError, error));
    }
  },
  getters: {
    getPersons(state) {
      return state.personas
    },
    getusers(state) {
      return state.users
    },
    findUser(state, userId){
      if(state.users === userId){
        console.log(msgUserFound)
      }else{
        console.log(msgUserNotFound)
      }
    }
  },
  modules: {}
});