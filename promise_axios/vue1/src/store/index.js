
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import modulesA from './modules/modulesA'
//import * as types from './mutation-types'


Vue.use(Vuex)
const state={
  coun:5,
  students:[
   {id:'01',age:12,name:'JJ'},
   {id:'02',age:22,name:'join'},
   {id:'03',age:28,name:'bie'},
   {id:'04',age:12,name:'kpn'}
  ],
  userInfo:{
    name:'viviya',
    age:18
  }
}


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules:{
    a:modulesA
  }
});

