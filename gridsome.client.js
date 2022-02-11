import { initializeApp } from 'firebase/app';

import Vuex from 'vuex';
import createStore from './store';

export default function (Vue, defaultOptions, {appOptions}) {
    Vue.use(Vuex);
    appOptions.firebase = initializeApp(defaultOptions);
    appOptions.store = createStore();
}