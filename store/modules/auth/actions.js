import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const actions = {
    signUpAction({ commit }, payload) {
        createUserWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .catch(error => {
            commit("setError", error.message);
        });
    },
    signInAction({ commit }, payload) {
        signInWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .catch(error => {
            commit("setError", error.message);
        });
    },
    signOutAction({ commit }) {
        console.log("trik");
        getAuth()
        .signOut()
        .then(() => commit("setUser", null))
        .catch(error => {
            commit("setError", error.message);
        });
    }
};

export default actions;
