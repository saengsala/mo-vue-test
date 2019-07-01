import * as types from '../mutations/hello'

const state = {
    helloArray: []
}

const getters = {
    getHelloArray: state => state.helloArray
}

const actions = {
    fetchHelloArrayAction({ commit }) {
        const tempArray = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE']
        commit(types.HELLO_ARRAY, tempArray)
    }

}

const mutations = {
    [types.HELLO_ARRAY](state, payload) {
      state.helloArray = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
