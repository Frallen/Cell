import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  onSnapshot,
} from "firebase/firestore";
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
  getters: {},
  mutations: {
    setLoading(state, loading) {
      state.loadingAdmin = loading;
    },
    setGenres(state, genres) {
      state.genres = genres;
    },
  },
  actions: {
    async GetGenres({ state, commit }) {
      commit("setLoading", true);
      const q = query(collection(db, "genres"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const genres = [];
        querySnapshot.forEach((doc) => {
          let genre={
            id:doc.id,
            name:doc.data().genre,
            slug:doc.data().slug,
          }
          genres.push(genre);
        });

        commit("setGenres", genres);
        commit("setLoading", false);
        // console.log("Current cities in CA: ", genres.join(", "));
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
