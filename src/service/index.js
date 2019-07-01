import Vuex from 'vuex'
import hello from './modules/hello'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            hello
        }
    })
}

export default createStore