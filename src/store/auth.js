import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

export const AuthModule = {
  namespaced: true,
  state: () => ({
    isAuthReady: false,
    isLoading: false,
    user: null,
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
  },
  actions: {
    async signUp({ state, commit }) {
      await createUserWithEmailAndPassword(
        auth,
        state.user.email,
        state.user.password
      )
        .then((snap) => {
          const user = snap.user;

          commit("setUser", user);

          commit("isLoading", false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async login({ state, commit }) {
      commit("isLoading", true);

      await signInWithEmailAndPassword(
        auth,
        state.user.email,
        state.user.password
      )
        .then((snap) => {
          const user = snap.user;
          commit("setUser", user);
          commit("isLoading", false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async logout({ state, commit }) {
      commit("isLoading", true);
      commit("setUser", null);
      commit("isLoading", false);
    },
    async LoginStatus({ commit }) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user)
         commit("setAuthReady", true);
         commit("setUser", user);

        } else {
          // User is signed out
          // ...
        }
      });
    },
  },
};
