import { addDoc, collection, query, where, getDocs,doc, onSnapshot  } from "firebase/firestore";
import { db } from "../../firebase";

export const adminModule = {
  namespaced: true,
  state: () => ({
    genres: [],
    actors: [],
    films: [],
    users: [],
    loadingAdmin: false,
  }),
  getters: {

  },
  mutations: {
    setLoading(state, loading) {
      state.loadingAdmin = loading;
    },
    setGenres(state,genres){
      state.genres=genres
    }
  },
  actions: {
    async GetGenres({state,commit,}){
      commit("setLoading", true);
     let snap=await onSnapshot(doc(db, "cities", "SF"), (doc) => {
       commit("setGenres", doc.data());
       commit("setLoading", false);
      });
    },
    async CreateGenre({ state, commit }, newGenre) {
      commit("setLoading", true);
      await addDoc(collection(db, "genres"), {
        ...newGenre,
      })
        .then((p) => {
          commit("setLoading", false);
        })
        .catch((err) => {
          commit("setLoading", false);
          console.log(err);
        });
    },
  },
};
