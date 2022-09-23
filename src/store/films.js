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
  limit,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";

export const filmsModule = {
  namespaced: true,
  state: () => ({
    films: [],
    orderedGenres: [],
    film: {},
    genres: [],
    isLoading: false,
  }),
  getters: {},
  mutations: {
    loadMoreFilms(state, data) {
      state.orderedGenres.push(data);
    },
    setGenres(state, data) {
      state.genres = data;
    },
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

        const { docs } = await getDocs(query(collection(db, "films")));
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
    async FetchGenres({ state, commit }) {
      try {
        commit("setLoading", true);

        const docs = await getDocs(query(collection(db, "genres")));
        let arr = [];
        docs.forEach((p) => {
          const item = {
            ...p.data(),
            id: p.id,
          };
          arr.push(item);
        });

        commit("setGenres", arr);
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
    async GetFilmsByGenre({ state, commit }, genreSlug) {
      try {
        commit("setLoading", true);
        let genre = state.genres.find((p) => p.slug === genreSlug);

        let documentSnapshots = await getDocs(
          query(
            collection(db, "films"),
            where("genres", "array-contains", genre.name),
            limit(25)
          )
        );

        const lastVisible =
          documentSnapshots.docs[documentSnapshots.docs.length - 1];
        const next = await getDocs(
          query(
            collection(db, "films"),
            where("genres", "array-contains", genre.name),
            startAfter(lastVisible),
            limit(25)
          )
        );
        let data = {
          ...next.data(),
        };
        commit("loadMoreFilms", data);
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
