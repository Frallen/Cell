import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";

export const filmsModule = {
  namespaced: true,
  state: () => ({
    films: [],
    film: {},
    isLoading: false,
  }),
  getters: {},
  mutations: {
    setFilms(state, data) {
      state.films = data;
    },
    setFilm(state, data) {
      state.film = data;
    },
    setLoading(state, loading) {
      state.isLoading = loading;
    },
  },
  actions: {
    async FetchFilms({ state, commit }) {
      try {
        commit("setLoading", true);

        // `onSnapshot` registers a real-time updates listener,
        // use `getDocs` to retrieve documents
        const { docs } = await getDocs(query(collection(db, "films")));

        // Map over the `docs` array and return fully hydrated objects
        const data = await Promise.all(
          docs.map(async (doc) => ({
            ...doc.data(),
            id: doc.id,
            poster:
              (await getDownloadURL(
                ref(storage, `images/${doc.id}/poster.png`)
              )) ?? null,
            BigPoster:
              (await getDownloadURL(
                ref(storage, `images/${doc.id}/BigPoster.png`)
              )) ?? null,
          }))
        );

        commit("setFilms", data);
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
    async GetFilm({ state, commit }, id) {
      try {
        commit("setLoading", true);
        const docs = await getDoc(doc(db, "films", id));
        console.log(docs.data());
        let returnPoster = async () => {
          return await getDownloadURL(
            ref(storage, `images/${docs.id}/poster.png`)
          );
        };
        let returnBigPoster = async () => {
          return await getDownloadURL(
            ref(storage, `images/${docs.id}/BigPoster.png`)
          );
        };
        const data = {
          ...docs.data(),
          id: docs.id,
          poster: (await returnPoster()) ?? null,
          BigPoster: (await returnBigPoster()) ?? null,
        };

        commit("setFilm", data);
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
  },
};
