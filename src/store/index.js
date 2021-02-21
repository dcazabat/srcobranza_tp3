import Vue from "vue";
import Vuex from "vuex";
import {
  personsUrl,
  userUrl,
  baseUrl,
  cobradoresUrl
} from "../assets/js/urls";
import {
  msgConexionFetchError,
  msgParseFetchError,
  msgWrongPwd
} from "../assets/js/messages";

Vue.use(Vuex);

import router from '../router'

export default new Vuex.Store({
  state: {
    isLogged: false,
    isRegister: false,
    personas: [],
    cobradores: [],
    users: {},
    userId: "",
    userPwd: "",
    pwdIsCorrect: false,
    currentUser: {},
    title: '',
    action: '',
    showModal: false,
    record: {
      id: 0,
      fullname: '',
      country: '',
      age: 0,
      occupation: '',
    },
  },
  mutations: {
    setRecord(state, payload) {
      state.record = {
        id: payload.id,
        fullname: payload.result.nombre,
        country: payload.result.pais,
        age: payload.result.edad,
        occupation: payload.result.ocupacion
      }
    },
    resetRecord(state,payload){
      state.record=payload.record
    },
    setPersons(state, payload) {
      state.personas = Object.entries(payload.person);
    },
    setCobrador(state, payload) {
      state.cobradores = Object.entries(payload.cobrador);
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
    pwd_is_correct(state, payload) {
      state.pwdIsCorrect = payload;
    },
    logOff(state) {
      console.log('Logout')
      state.isLogged = false;
      // state.isRegister = false;
      // state.pwdIsCorrect = false;
      // state.currentUser = {};
      // router.push({ path: '/' })
    },
    loggin(state, payload) {
      state.currentUser = payload.currentUser
      state.isLogged = true
      state.isRegister = true
    },
    isRegistered(state, payload) {
      state.isRegister = payload
    }
  },
  actions: {
    getAllPersons({
      commit
    }) {
      fetch(personsUrl)
        .then(res => res.json()).catch(err => console.log(msgConexionFetchError, err))
        .then((person) => commit("setPersons", {
          person
        }))
        .catch(error => console.log(msgParseFetchError, error));
    },
    getPersonById({
      commit
    }, payload) {
      if (payload.id === 0) {
        commit("resetRecord", {
          record: {
            id: 0,
            fullname: '',
            country: '',
            age: 0,
            occupation: '',
          }
        })
      } else {
        let requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        fetch(baseUrl + "/personas/" + payload.id + ".json", requestOptions)
          .then(response => response.json())
          .then(result => commit("setRecord", {
            result,id:payload.id
          }))
          .catch(error => console.log('error', error));
      }
    },
    getCobradoresById(context, payload) {
      let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(baseUrl + "/cobradores/" + payload.id + ".json", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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
    getAllCobradores({
      commit
    }) {
      fetch(cobradoresUrl)
        .then(res => res.json()).catch(err => console.log(msgConexionFetchError, err))
        .then((cobrador) => commit("setPersons", {
          cobrador
        }))
        .catch(error => console.log(msgParseFetchError, error));
    },
    patchNewUser(context, payload) {
      let newUser = `{"${JSON.parse(payload.user_id)}": ${JSON.stringify(payload.data)}}`;

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
    updatePerson(context, payload) {
      let newUser = `{
        "edad":  ${payload.personId.age},
         "nombre":"${payload.personId.fullname}",
         "ocupacion":"${payload.personId.occupation}",
         "pais":"${payload.personId.country}"
       }`;

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = newUser;
       console.log(raw)
      let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(baseUrl+"/personas/"+payload.personId.id+".json", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));

    },
    postPerson(context, payload) {
      let newPerson = {
       edad:payload.record.edad,
        nombre: payload.record.nombre,
        ocupacion:payload.record.ocupacion,
        pais:payload.record.pais
      }

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = newPerson;

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://sr-cobranza-default-rtdb.firebaseio.com/personas.json", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    postcobrador(context, payload) {
      let newCobrador = {
        edad:payload.record.edad,
         nombre: payload.record.nombre,
         ocupacion:payload.record.ocupacion,
         pais:payload.record.pais
       };

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = newCobrador;

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(cobradoresUrl, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    delUser(context, payload) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch(baseUrl + "/users/" + payload.userId + ".json", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    deletePerson({commit}, payload) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch(baseUrl + "/personas/" + payload.personId + ".json", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      commit("getAllPersons")
    },
    delCobrador(context, payload) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch(baseUrl + "/cobradores/" + payload.cobradorId + ".json", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    async isValidUser({
      commit
    }, payload) {
      await fetch(baseUrl + "/users/" + payload.userId + ".json")
        .then(response => response.json())
        .catch(err => {
          commit("isRegistered", false);
          console.log(msgConexionFetchError, err)
        })
        .then(currentUser => {
          commit("isRegistered", true)
          this.isRegister = true
          if (currentUser.password === payload.userPwd) {
            commit("loggin", currentUser)
            commit("pwd_is_correct", true)
            this.isLogged = true
            console.log(this.isLogged, this.isRegister)
            router.replace({
              path: "/socios"
            });
          }
        })
        .catch(error => console.log(msgParseFetchError, error));
    }
  },
  getters: {
    getPersons(state) {
      return state.personas
    },
    getCobradores(state) {
      return state.cobradores
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
    getCurrentUser(state) {
      return state.currentUser
    }
  },
  modules: {}
});