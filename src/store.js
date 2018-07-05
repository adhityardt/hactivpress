import Vue from 'vue'
import Vuex from 'vuex'
import { user, db } from './firebase.js'
import alertify from 'alertifyjs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: localStorage.getItem('userId')
  },
  mutations: {
    setUserId (state, payload) {
      state.userId = payload
    }
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
    },
    logIn ({ commit }, payload) {
      user.signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          localStorage.setItem('userId', response.user.uid)
          commit('setUserId', response.user.uid)
          alertify
            .alert('You have successfully logged in', function () {
              alertify.message('You are now logged in')
              window.location.reload()
            })
          // router.push({name: 'mainpage'})
        })
        .catch(error => {
          alertify
            .alert('Email or password is wrong', function () {
              alertify.message('Please check or re-enter your email and password')
            })
          console.log(error)
        })
    },
    addArticleDb ({commit, state}, payload) {
      db.ref('/Articles/').child(payload.title).set({
        category: payload.category,
        content: payload.content,
        userId: state.userId
      })
        .then(response => {
          db.ref('/Authors/').child(state.userId).push({
            title: payload.title,
            category: payload.category,
            content: payload.content
          })
            .then(result => {
              db.ref('/Category/').child(payload.category).push({
                title: payload.title,
                userId: state.userId,
                content: payload.content
              })
              alertify.alert('Your article is succesfully uploaded')
            }).catch(error => {
              console.log(error)
            })
        }).catch(error => {
          console.log(error)
        })
    }
  }
})
