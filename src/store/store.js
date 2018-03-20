// import store here
import Vue from 'vue'
import Vuex from '../../node_modules/vuex'
import loader from './plugin/modules/loader'

//import models here
import {userModel} from './plugin/models/index'

Vue.use(Vuex)

const modelList = {'userModel': userModel}

export const store = new Vuex.Store({
  state: {},
  mutations: {
    //define mutations like this
    /*  mutationname(state, val) {
        state['modelname'] operator condition
        return state['modelname']
      }, */
    createRecord(state, val) {
      return loader.createRecord(state, modelList, val)
    }
  },
  getters: {
    //define getters like this
    /*  modelname(state) {
        return state['modelname']
      }*/
    userModel(state) {
      return state['userModel']
    }
  }
})

// loader.addWholeFunctionality(store, modelList)
