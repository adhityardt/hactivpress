import Vue from 'vue'
import Vuex from 'vuex'
import { user, db } from './firebase.js'
import alertify from 'alertifyjs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    register ({commit}, payload) {
      user.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          db.ref('/Users/').child(response.user.uid).set({
            name: payload.name,
            email: payload.email
          })
          alertify
            .alert('You have successfully registered', function () {
              alertify.message('Please login with your registered account')
            })
        })
        .catch(err => {
          alertify
            .alert('Email or password is wrong', function () {
              alertify.message('Please check or re-enter your email and password')
            })
          console.log(err)
        })
    }
  }
})
