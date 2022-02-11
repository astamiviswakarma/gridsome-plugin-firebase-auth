import Vuex from 'vuex'
import auth from './modules/auth';
import onAuthStateChanged from './modules/auth/plugin';
import { createLogger } from 'vuex';

const debug = process.env.NODE_ENV !== 'production'

const createStore = () => new Vuex.Store({
    modules: {
        auth: auth
    },
    strict: debug,
    plugins: debug ? [createLogger(), onAuthStateChanged()] : [onAuthStateChanged()]
});

export default createStore;