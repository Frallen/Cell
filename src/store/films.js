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
  getters: {
    getFilm:(state)=>(id)=>{
      return state.films.find(film=>film.id === id);
    }
  },
  mutations: {
    loadMoreFilms(state, data) {
      state.orderedGenres = data;
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
                ref(storage, `images/films/${doc.id}/poster.png`)
              )) ?? null,
            BigPoster:
              (await getDownloadURL(
                ref(storage, `images/films/${doc.id}/BigPoster.png`)
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

        const { docs } = await getDocs(query(collection(db, "genres")));
        const data = await Promise.all(
          docs.map(async (doc) => ({
            ...doc.data(),
            id: doc.id,
            genre:
              (await getDownloadURL(
                ref(storage, `images/genres/${doc.id}/genre.png`)
              )) ?? null,
          }))
        );

        commit("setGenres", data);
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
        //    genre.forEach(p=>)
        delete genre.genre;

        const first = query(
          collection(db, "films"),
          where("genres", "array-contains", genre),
          orderBy("genres"),
          limit(25)
        );
        const documentSnapshots = await getDocs(first);

        // Get the last visible document
        const lastVisible =
          documentSnapshots.docs[documentSnapshots.docs.length - 1];
        //let data = new Object(genre.name);

        await onSnapshot(
          query(
            collection(db, "films"),
            where("genres", "array-contains", genre),
          ),
          (querySnapshot) => {
            const allPromises = querySnapshot.docs.map(async (doc) => {
              const poster = ref(storage, `images/films/${doc.id}/poster.png`);
              const BigPoster = ref(
                storage,
                `images/films/${doc.id}/BigPoster.png`
              );
              return {
                id: doc.id,
                ...doc.data(),
                poster: await getDownloadURL(poster),
                BigPoster: await getDownloadURL(BigPoster),
              };
            });

            Promise.all(allPromises).then((data) =>
              commit("loadMoreFilms", data)
            );
          }
        );

        /*  const lastVisible =
          documentSnapshots.docs[documentSnapshots.docs.length - 1];*/
        /* const next = await getDocs(
          query(
            collection(db, "films"),
            where("genres", "array-contains", genre.name),
            orderBy(genre.name),
            startAfter(lastVisible),
            limit(25)
          )
        );
        documentSnapshots.forEach((p) => {
          
        });*/
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },

  },
};
