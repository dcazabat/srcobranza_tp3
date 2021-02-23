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
const md5 = require('md5')

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
    showProgressBar: false,
    record: {
      id: 0,
      fullname: '',
      country: '',
      age: 0,
      occupation: '',
    },
    recordCobrador: {
      address: '',
      age: 0,
      country: '',
      dni: 0,
      email: '',
      fullname: '',
      gender: '',
      phone: 0
    }
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
    resetRecord(state, payload) {
      state.record = payload.record
    },
    setPersons(state, payload) {
      let arr = [];
      let dato = {};
      for (let i = 0; i < Object.entries(payload.person).length; i++) {
        dato = {
          id: Object.entries(payload.person)[i][0],
          fullname: Object.entries(payload.person)[i][1].nombre,
          country: Object.entries(payload.person)[i][1].pais,
          age: Object.entries(payload.person)[i][1].edad,
          occupation: Object.entries(payload.person)[i][1].ocupacion
        }
        arr.push(dato);
      }
      state.personas = arr
    },
    setCobrador(state, payload) {
      let arr = [];
      let dato = {};
      for (let i = 0; i < Object.entries(payload.cobrador).length; i++) {
        dato = {
          address: Object.entries(payload.cobrador)[i][1].address,
          age: Object.entries(payload.cobrador)[i][1].age,
          country: Object.entries(payload.cobrador)[i][1].country,
          dni: Object.entries(payload.cobrador)[i][1].dni,
          email: Object.entries(payload.cobrador)[i][1].email,
          fullname: Object.entries(payload.cobrador)[i][1].fullname,
          gender: Object.entries(payload.cobrador)[i][1].gender,
          phone: Object.entries(payload.cobrador)[i][1].phone
        }
        arr.push(dato);
      }
      state.cobradores = arr;
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
      state.isLogged = false;
      localStorage.removeItem('srCobranza')
      localStorage.clear;
    },
    loggin(state, payload) {
      state.isLogged = true;
      state.isRegister = true;
      state.currentUser = payload.currentUser;
      localStorage.setItem('srCobranza', 'SATAN ME INVADE, JAJAJAJA !!!!!')
    },
    isRegistered(state, payload) {
      state.isRegister = payload
    },
    filterPersons(state, payload) {
      let arr = [];
      let column = payload.column.toLowerCase();
      let textsearch = payload.textsearch.toLowerCase();

      arr = state.personas.filter((person) => person[column].toLowerCase().includes(textsearch));

      state.personas = arr;
    },
    setIsLogged(state) {
      state.isLogged = true;
    },
  },
  actions: {
    async getAllPersons({
      commit
    }) {
      await fetch(personsUrl)
        .then(res => res.json()).catch(err => console.log(msgConexionFetchError, err))
        .then((person) => commit("setPersons", {
          person
        }))
        .catch(error => console.log(msgParseFetchError, error));
    },
    async getPersonById({
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

        await fetch(baseUrl + "/personas/" + payload.id + ".json", requestOptions)
          .then(response => response.json())
          .then(result => commit("setRecord", {
            result,
            id: payload.id
          }))
          .catch(error => console.log('error', error));
      }
    },
    async getCobradoresById(context, payload) {
      let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      await fetch(baseUrl + "/cobradores/" + payload.id + ".json", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    async getAllUsers({
      commit
    }) {
      await fetch(userUrl)
        .then(res => res.json())
        .catch(err => console.log(msgConexionFetchError, err))
        .then((user) => commit("setUsers", {
          user
        }))
        .catch(error => console.log(msgParseFetchError, error));
    },
    async getAllCobradores({
      commit
    }) {
      await fetch(cobradoresUrl)
        .then(res => res.json()).catch(err => console.log(msgConexionFetchError, err))
        .then((cobrador) => commit("setCobrador", {
          cobrador
        }))
        .catch(error => console.log(msgParseFetchError, error));
    },
    async patchNewUser(context, payload) {
      let newUser = `{"${payload.user_id}": ${JSON.stringify(payload.data)}}`;

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = newUser;

      let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      await fetch(userUrl, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));

    },
    async updatePerson(context, payload) {
      let newUser = `{
        "edad":  ${payload.personId.age},
         "nombre":"${payload.personId.fullname}",
         "ocupacion":"${payload.personId.occupation}",
         "pais":"${payload.personId.country}"
       }`;

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = newUser;

      let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      await fetch(baseUrl + "/personas/" + payload.personId.id + ".json", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));


    },
    async postPerson(context, payload) {
      let newPerson = JSON.stringify({
        edad: payload.record.age,
        nombre: payload.record.fullname,
        ocupacion: payload.record.occupation,
        pais: payload.record.country
      })
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = newPerson;
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      await fetch(personsUrl, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    async postcobrador(context, payload) {
      let newCobrador = {
        edad: payload.record.edad,
        nombre: payload.record.nombre,
        ocupacion: payload.record.ocupacion,
        pais: payload.record.pais
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

      await fetch(cobradoresUrl, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    async delUser(context, payload) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      await fetch(baseUrl + "/users/" + payload.userId + ".json", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    async deletePerson(context, payload) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      await fetch(baseUrl + "/personas/" + payload.personId + ".json", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
    async delCobrador(context, payload) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      await fetch(baseUrl + "/cobradores/" + payload.cobradorId + ".json", requestOptions)
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
          if (currentUser.password === md5(payload.userPwd)) {
            commit("loggin", currentUser)
            commit("pwd_is_correct", true)
            this.isLogged = true
            router.replace({
              path: "/socios"
            });
          }
        })
        .catch(error => console.log(msgParseFetchError, error));
    },
    logOff({
      commit
    }) {
      commit("logOff")
    },
    applyFilters({
      commit
    }, payload) {
      commit("filterPersons", payload)
    },
    setLocalStorage() {
      localStorage.setItem("srCobranza", 'Satan Me Invade JAJAJAJA')
    },
    readLocalStorage() {
      return localStorage.getItem("srCobranza")
    },
    setIsLogged({
      commit
    }) {
      commit('setIsLogged');
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