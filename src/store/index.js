import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employeeId: '1234',
    firstName: 'אביאור',
    lastName: 'אביאור',
    city: 'בית שמש',
    address: 'ראובן',
    phoneNumber: '0523545644',
    role: '',
    class: '',
    smsText: '',
    isLoading: false,
    responseMessage: {},
  },
  getters,
  mutations,
  actions,
  modules: {

  }
})