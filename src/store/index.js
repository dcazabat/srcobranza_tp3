import Vue from "vue";
import Vuex from "vuex";
import {
  personsUrl,
  userUrl,
  msgConexionFetchError,
  msgParseFetchError,
  msgUserFound,
  msgUserNotFound,
  msgWrongPwd
} from "../assets/js/urls";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    personas: [],
    users: {},
    userId: "",
    userPwd: "",
    currentUser: {}
  },
  mutations: {
    setPersons(state, payload) {
      state.personas = payload.person;
      console.log(state.personas)
    },
    setUsers(state, payload) {
      state.users = payload.user
    },
    setCurrentuser(state, payload){
      if(payload.currentUser.pwd === userPwd){
        state.currentUser = payload.currentUser;
        state.isLogged = true;
      }else{
        consoele.log(msgWrongPwd)
      }
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
    getAllUsers({ commit }) {
      fetch(userUrl)
        .then(res => res.json())
        .catch(err => console.log(msgConexionFetchError, err))
        .then((user) => commit("setUsers", { user }))
        .catch(error => console.log(msgParseFetchError, error));
    },
    getUserById({ commit },userId) {
      fetch(baseUrl+"/users/"+userId+".json")
        .then(response => response.json())
        .catch(err => console.log(msgConexionFetchError, err))
        .then((currentUser) => commit("setCurrentuser",{ currentUser }))
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
    findUser(state, userId) {
      if (state.users.find(user => Object.key(user) === userId)) {
        console.log(msgUserFound)
      } else {
        console.log(msgUserNotFound)
      }
    }
  },
  modules: {}
});