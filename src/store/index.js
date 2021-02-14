import Vue from "vue";
import Vuex from "vuex";
import { personsUrl, userUrl, baseUrl } from "../assets/js/urls";
import { msgConexionFetchError, msgParseFetchError, msgWrongPwd } from "../assets/js/messages";

Vue.use(Vuex);

import router from '../router'

export default new Vuex.Store({
  state: {
    isLogged: false,
    isRegister: false,
    personas: [],
    users: {},
    userId: "admin",
    userPwd: "admin*",
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
    setCurrentuser(state, payload) {
      if (payload.currentUser.password === state.userPwd) {
        state.currentUser = payload.currentUser;
        state.isLogged = true;
      } else {
        console.log(msgWrongPwd)
      }
    },
    logOff(state){
      state.isLogged=false;
    }
  },
  actions: {
    getAllPerons({ commit }) {
      fetch(personsUrl)
        .then(res => res.json()).catch(err => console.log(msgConexionFetchError, err))
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
    // isValidUser() {
      // fetch(baseUrl + "/users/" + "admin" + ".json")
      //   .then(response => response.json())
      //   .catch(err => console.log(msgConexionFetchError, err))
      //   .then(currentUser => console.log(currentUser))
      //   .catch(error => console.log(msgParseFetchError, error));
      // console.log(baseUrl + "/users/" + "admin" + ".json")
    // }
  },
  getters: {
    getPersons(state) {
      return state.personas
    },
    getusers(state) {
      return state.users
    },
    getIsLogged(state){
      return state.isLogged
    },
    getIsRegister(state){
      return state.isRegister
    },
    async isValidUser(state){
      await fetch(baseUrl + "/users/" + "admin" + ".json")
        .then(response => response.json())
        .catch(err => console.log(msgConexionFetchError, err))
        .then(currentUser => {
          if(currentUser.password === state.userPwd){
            router.push({ name: 'Socios' })
            state.isRegister = true;
            state.isLogged= true;
          }else{
            console.log("Error en la contraseña")
          }
          console.log(currentUser.password)
        })
        .catch(error => console.log(msgParseFetchError, error));
    }
  },
  modules: {}
});