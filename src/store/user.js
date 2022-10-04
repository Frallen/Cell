import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
  getDoc,
  orderBy,
  startAfter,
  limit,setDoc,
  updateDoc, addDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
      return state.favorites=favorites
    }
  },
  getters: {},
  actions: {
    async GetUserFavorites({state,commit}){
      try{
        commit("setLoading", true);
       let snap= await getDoc(doc(db, "films",state.userInfo.id));

      //  snap.data().favorites

        commit("setFavorites",)
      }catch (error) {
        console.error(error)
      }finally {
        commit('setLoading', false);
      }
    },
    async addToFavorite({ state, commit }, id) {
      try {
        commit("setLoading", true);
        await setDoc(doc(db, "users", state.userInfo.id), {
          favorites: {
            [id]: true,
          },
        },{merge: true});
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
    async removeFromFavorite({ state, commit }, id) {
      try {
        commit("setLoading", true);
        await setDoc(doc(db, "users", state.userInfo.id), {
          favorites: {
            [id]: false,
          },
        },{merge: true});
      } catch (err) {
        console.error(err);
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
            onSnapshot(
              collection(db, "users"),
              where("id", "==", user.uid),
              (doc) => {
                doc.forEach((doc) => {
                  let data = doc.data();
                  commit("setUserInfo", data);
                });
              }
            );
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
