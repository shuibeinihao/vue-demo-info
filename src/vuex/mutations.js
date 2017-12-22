
import state from './state'
import * as types from './mutations-types';
// mutations
const mutations = {
  [types.WANG](state,data){
    state.editor = data
    console.log(state)
    return state.editor;
  },
};
export default mutations;