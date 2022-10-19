import {
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
  getDoc,
  orderBy,
  startAfter,
  limit,
  setDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import {
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

export const userModule = {
  namespaced: true,
  state: () => ({
    setLoading: false,
    userInfo: [],
    favorites: [],
  }),
  mutations: {
    setLoading(state, loading) {
      return (state.setLoading = loading);
    },
    setUserInfo(state, userInfo) {
      return (state.userInfo = userInfo);
    },
    setFavorites(state, favorites) {
      return (state.favorites = favorites);
    },
  },
  getters: {},
  actions: {
    async GetUserFavorites({ state, commit }) {
      try {
        commit("setLoading", true);
        let snap = await getDoc(doc(db, "films", state.userInfo.id));

        //  snap.data().favorites

        commit("setFavorites");
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async addToFavorite({ state, commit }, id) {
      try {
        commit("setLoading", true);
        await setDoc(
          doc(db, "users", state.userInfo.id),
          {
            favorites: {
              [id]: true,
            },
          },
          { merge: true }
        );
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
    async removeFromFavorite({ state, commit }, id) {
      try {
        commit("setLoading", true);
        await setDoc(
          doc(db, "users", state.userInfo.id),
          {
            favorites: {
              [id]: false,
            },
          },
          { merge: true }
        );
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
    async UpdateUser({ state, commit }, data) {
      try {
        commit("setLoading", true);
        const auth = getAuth();
        /*updateEmail(auth.currentUser, "user@example.com").then(() => {
          // Email updated!
          // ...
        })*/

        let docRef = doc(db, "users", auth.currentUser.uid);
         if (data.email) {

          await sendEmailVerification(auth.currentUser, data.email).then(
            async () => {
              /* await updateDoc(docRef, {
                email: data.email,
              });*/
            }
          );
        }
         debugger
        if (data.password) {
          sendPasswordResetEmail(
            auth,
            data.email ?? auth.currentUser.email
          ).then(() => {
            // Password reset email sent!
            // ..
          });
        }
      } catch (e) {
        console.error(e);
      } finally {
        commit("setLoading", false);
      }
    },
    async GetUserData({ state, commit }) {
      try {
        commit("setLoading", true);
        const auth = getAuth();
        await onAuthStateChanged(auth, (user) => {
          if (user) {
            onSnapshot(doc(db, "users", user.uid), (doc) => {
              let data = doc.data();
              commit("setUserInfo", data);
            });
          } else {
            // User is signed out
            // ...
          }
        });
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
  },
};
