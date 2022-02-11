import { getAuth } from "firebase/auth";

export default function onAuthStateChanged () {
    return store => {
        getAuth().onAuthStateChanged(async (authUser) => {
            if (authUser) {
                const { displayName, email, emailVerified, photoURL, uid } = authUser;
                const idToken = await authUser.getIdToken()
                store.commit("auth/setUser", {
                    displayName,
                    email,
                    emailVerified,
                    photoURL,
                    uid,
                    idToken
                });
            } else {
                store.commit("auth/setUser", null);
            }
        });
    }
}