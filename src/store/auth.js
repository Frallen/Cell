import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  deleteUser,
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
  deleteDoc,
} from "firebase/firestore";

let errorMessage = (componentContext) => {
  componentContext.$swal.fire({
    icon: "error",
    title: "Произошла ошибка",
  });
};
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
    async signUp({ state, commit, dispatch }, componentContext) {
      try {
        commit("isLoading", true);
        await createUserWithEmailAndPassword(
          auth,
          state.user.email,
          state.user.password
        ).then((snap) => {
          const user = snap.user;

          dispatch("signUpData", componentContext);

          commit("setUser", user);
          commit("setAuthReady", true);
          commit("isLoading", false);
          componentContext.$swal.fire({
            icon: "success",
            title: "Регистрация прошла успешно",
          });
        });
      } catch (err) {
        console.error(err.message);
        switch (err.message) {
          case "Firebase: Error (auth/invalid-password).":
            return componentContext.$swal.fire({
              icon: "error",
              title: "Не корректный пароль",
            });
          case "Firebase: Error (auth/invalid-email).":
            return componentContext.$swal.fire({
              icon: "error",
              title: "Не корректный email",
            });
          case "Firebase: Error (auth/too-many-requests).":
            return componentContext.$swal.fire({
              icon: "error",
              title: "Слишком много запросов",
            });
          case "Firebase: Error (auth/email-already-in-use).":
            return componentContext.$swal.fire({
              icon: "error",
              title: "Пользователь с такой почтой уже существует",
            });
          default:
            return errorMessage(componentContext);
        }
      } finally {
        commit("isLoading", false);
      }
    },
    //Создание профиля пользователя
    async signUpData({ state, commit }, componentContext) {
      try {
        commit("isLoading", true);
        await setDoc(doc(db, "users", state.user.uid), {
          id: state.user.uid,
          email: state.user.email,
        });
      } catch (err) {
        console.error(err);
        switch (err.message) {
          default:
            return errorMessage(componentContext);
        }
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
    async login({ state, commit }, componentContext) {
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
          componentContext.$router.push("/");
          componentContext.$emit("closeModal");
        });
      } catch (err) {
        console.error(err.message);

        switch (err.message) {
          case "Firebase: Error (auth/invalid-password).":
            return componentContext.$swal.fire({
              icon: "error",
              title: "Не корректный пароль",
            });
          case "Firebase: Error (auth/invalid-email).":
            return componentContext.$swal.fire({
              icon: "error",
              title: "Не корректный email",
            });
          case "Firebase: Error (auth/wrong-password).":
            return componentContext.$swal.fire({
              icon: "error",
              title: "Не верный пароль",
            });
          case "Firebase: Error (auth/too-many-requests).":
            return componentContext.$swal.fire({
              icon: "error",
              title: "Слишком много запросов",
            });
          case "Firebase: Error (auth/user-not-found).":
            return componentContext.$swal.fire({
              icon: "error",
              title: "Пользователя с такой почтой не существует",
            });
          default:
            return errorMessage(componentContext);
        }
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
    async DeleteUser({ state, commit, dispatch }, componentContext) {
      try {
        commit("setLoading", true);
        const auth = getAuth();
        const user = auth.currentUser;
        await deleteUser(user).then(async () => {
          await deleteDoc(doc(db, "users", user.uid));
          dispatch("logout");
        });

        componentContext.$swal.fire({
          icon: "success",
          title: "Аккаунт успешно удален",
        });
        componentContext.$router.push("/");
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
