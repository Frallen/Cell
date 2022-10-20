import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut, getAuth
} from "firebase/auth";
import { auth, db } from "../../firebase";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

export const AuthModule = {
  namespaced: true,
  state: () => ({
    isAuthReady: null,
    isLoading: false,
    openLoginModal: false,
    user: null,
    isAdmin: false,
  }),
  getters: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    isLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setAuthReady(state, isAuthReady) {
      state.isAuthReady = isAuthReady;
    },
    setAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
    setOpenModal(state, openLoginModal) {
      state.openLoginModal = openLoginModal;
    },
  },
  actions: {
    openLoginForm({ commit }) {
      commit("setOpenModal", true);
    },
    //создание пользователя
    async signUp({ state, commit, dispatch }) {
      try {
        commit("isLoading", true);
        await createUserWithEmailAndPassword(
          auth,
          state.user.email,
          state.user.password
        ).then((snap) => {
          const user = snap.user;

          dispatch("signUpData");

          commit("setUser", user);
          commit("setAuthReady", true);
          commit("isLoading", false);
        });
      } catch (err) {
        console.error(err);
      } finally {
        commit("isLoading", false);
      }
    },
    //Создание профиля пользователя
    async signUpData({ state, commit }) {
      try {
        commit("isLoading", true);
        await setDoc(doc(db, "users", state.user.uid), {
          id: state.user.uid,
          email: state.user.email,
        });
      } catch (err) {
      } finally {
        commit("isLoading", false);
      }
    },
    async isAdmin({ state, commit }) {
      try {
        commit("isLoading", true);
        let snap = await getDoc(doc(db, "users", state.user.uid));

        commit("setAdmin", snap.data().isAdmin ?? false);
      } catch (err) {
        console.error(err);
      } finally {
        commit("isLoading", false);
      }
    },
    //проверка авторизации
    async AuthState({ dispatch }) {
      await auth.onAuthStateChanged((userFirebase) => {
        dispatch("LoginStatus", userFirebase);
      });
    },
    LoginStatus({ commit, dispatch }, user) {
      //console.log(user)
      if (user) {
        commit("setAuthReady", true);
        commit("setUser", user);
        //   dispatch("UserProfile", user);
        dispatch("isAdmin");
      } else {
        // User is signed out
        // ...
      }
    },
    async login({ state, commit }) {
      try {
        commit("isLoading", true);

        await signInWithEmailAndPassword(
          auth,
          state.user.email,
          state.user.password
        ).then((snap) => {
          const user = snap.user;
          commit("setUser", user);
          commit("setAuthReady", true);
        });
      } catch (err) {
        console.error(err);
      } finally {
        commit("isLoading", false);
      }
    },
    async logout({ state, commit }) {
      try {
        const auth = getAuth();
        commit("isLoading", true);
        await signOut(auth);
        commit("setUser", null);
        commit("setAuthReady", false);
      } catch (err) {
        console.error(err);
      } finally {
        commit("isLoading", false);
      }
    },
  },
};
