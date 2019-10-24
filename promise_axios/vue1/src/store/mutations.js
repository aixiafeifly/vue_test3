
import Vue from 'vue'
import { SOME_MUTATION ,FN_MUTATION} from './mutation-types'
export default{
  add(state,payload){
    state.coun+=payload
  },
  reduce(state,payload){
    state.coun -=payload
  },
  [FN_MUTATION](state,data){
    console.log('FN_MUTATION')
    state.students.push(data)

  },
  [SOME_MUTATION](state){
      console.log('vuex')
    //不是响应式
    // state.userInfo[DA]='HAHA'
    // delete state.userInfo.age 
    //响应式式操作：
    // Vue.set(state.userInfo,'eee', DA)
   Vue.delete(state.userInfo,'name')

   
  },
fnactive(state,data){
  state.userInfo.name=data
}
  
}