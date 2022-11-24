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
  updatePassword,
  updateEmail,
} from "firebase/auth";

let errorMessage = (componentContext) => {
  componentContext.$swal.fire({
    icon: "error",
    title: "Произошла ошибка",
  });
};

export const userModule = {
  namespaced: true,
  state: () => ({
    setLoading: false,
    userInfo: [],
  }),
  mutations: {
    setLoading(state, loading) {
      return (state.setLoading = loading);
    },
    setUserInfo(state, userInfo) {
      return (state.userInfo = userInfo);
    },
  },
  getters: {},
  actions: {
    async SetRating({ state, commit }, obj) {
      try {
        commit("setLoading", true);

        await setDoc(
          doc(db, "users", state.userInfo.id),
          {
            rating: {
              [obj.id]: obj.val,
            },
          },
          { merge: true }
        );
        await setDoc(
          doc(db, "films", obj.id),
          {
            rating: { [state.userInfo.id]: obj.val },
          },
          { merge: true }
        );
      } catch (err) {
        console.error(err);
        switch (err.message) {
          default:
            return errorMessage(obj.componentContext);
        }
      } finally {
        commit("setLoading", false);
      }
    },
    async addToFavorite({ state, commit }, id, componentContext) {
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
        switch (err.message) {
          default:
            return errorMessage(componentContext);
        }
      } finally {
        commit("setLoading", false);
      }
    },
    async removeFromFavorite({ state, commit }, id, componentContext) {
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
        switch (err.message) {
          default:
            return errorMessage(componentContext);
        }
      } finally {
        commit("setLoading", false);
      }
    },
    async UpdateUser({ state, commit, dispatch }, data, componentContext) {
      try {
        commit("setLoading", true);
        const auth = getAuth();

        let docRef = doc(db, "users", auth.currentUser.uid);
        if (data.email) {
          await updateEmail(auth.currentUser, data.email).then(async () => {
            await updateDoc(docRef, {
              email: data.email,
            });
            dispatch("auth/logout", null, { root: true });
          });
        }

        if (data.password) {
          updatePassword(auth.currentUser, data.password).then(() => {
            dispatch("auth/logout", null, { root: true });
          });
        }
      } catch (err) {
        console.error(err);
        switch (err.message) {
          default:
            return errorMessage(componentContext);
        }
      } finally {
        commit("setLoading", false);
      }
    },
    async GetUserData({ state, commit }, componentContext) {
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
        switch (err.message) {
          default:
            return errorMessage(componentContext);
        }
      } finally {
        commit("setLoading", false);
      }
    },
  },
};
