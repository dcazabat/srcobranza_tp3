import Vue from "vue";
import Vuex from "vuex";
import {
  personsUrl,
  userUrl,
  baseUrl
} from "../assets/js/urls";
import {
  msgConexionFetchError,
  msgParseFetchError,
  msgWrongPwd
} from "../assets/js/messages";

Vue.use(Vuex);

//import router from '../router'

export default new Vuex.Store({
  state: {
    isLogged: false,
    isRegister: false,
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
    setCurrentuser(state, payload) {
      if (payload.currentUser.password === state.userPwd) {
        state.currentUser = payload.currentUser;
        state.isLogged = true;
      } else {
        console.log(msgWrongPwd)
      }
    },
    logOff(state) {
      state.isLogged = false;
    }
  },
  actions: {
    getAllPerons({
      commit
    }) {
      fetch(personsUrl)
        .then(res => res.json()).catch(err => console.log(msgConexionFetchError, err))
        .then((person) => commit("setPersons", {
          person
        }))
        .catch(error => console.log(msgParseFetchError, error));
    },
    getAllUsers({
      commit
    }) {
      fetch(userUrl)
        .then(res => res.json())
        .catch(err => console.log(msgConexionFetchError, err))
        .then((user) => commit("setUsers", {
          user
        }))
        .catch(error => console.log(msgParseFetchError, error));
    },
    patchNewUser(user_id, data) {
      let newUser = `{"${JSON.parse(user_id)}": ${JSON.stringify(data)}}`;

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = newUser;

      let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(userUrl, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));

    },
    postPerson(state) {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "id": 10,
        "nombre": "Gilberto Gil",
        "pais": "Chile",
        "edad": 23,
        "ocupacion": "Calidad"
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://sr-cobranza-default-rtdb.firebaseio.com/personas.json", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      console.log(state);
    }
  },
  getters: {
    getPersons(state) {
      return state.personas
    },
    getusers(state) {
      return state.users
    },
    getIsLogged(state) {
      return state.isLogged
    },
    getIsRegister(state) {
      return state.isRegister
    },
    async isValidUser(state) {
      await fetch(baseUrl + "/users/" + state.userId + ".json")
        .then(response => response.json())
        .catch(err => console.log(msgConexionFetchError, err))
        .then(currentUser => {
          if (currentUser.password === state.userPwd) {
            state.isRegister = true;
            state.isLogged = true;
          }
        })
        .catch(error => console.log(msgParseFetchError, error));
    }
  },
  modules: {}
});