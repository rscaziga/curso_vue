import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const SET_ESCRIBE = 'SET_ESCRIBE';
export const SET_TEXTO = 'SET_TEXTO';
export const SET_NUMERO = 'SET_NUMERO';

const store = new Vuex.Store({
  state: {
      escribe:"1",
      texto: "",
      numero:"0"
  },
  getters: {
      escribe(state){
        return state.escribe;
      },
        texto(state){
         return state.texto;
      },
      numero(state){
       return state.numero;
      }
    },
  mutations: {
      [SET_ESCRIBE](state, escribe){
        state.escribe = escribe;
      },
      [SET_TEXTO](state, texto){
        state.texto = texto;
      },
      [SET_NUMERO](state, texto){
        state.texto = texto;
      }
  },
  actions: {
      cambiarEscribe( {commit} , escribe){
        commit('SET_ESCRIBE', escribe);
      }
  },
  modules: {
  }
})

export default store;
