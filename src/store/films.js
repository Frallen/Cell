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

        let genre = state.genres.filter((p) => p.slug === genreSlug);
        const first = query(
          collection(db, "films"),
          where("genres", "array-contains", genre.map((p=>p.name))),
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
            where("genres", "array-contains-any", genre.map(p=>p.name)),
            //orderBy("genres"),
           // startAfter(lastVisible),
            limit(25)
          ),
          (querySnapshot) => {
            const allPromises = querySnapshot.docs.map(async (doc) => {
              const poster = ref(storage, `images/${doc.id}/poster.png`);
              const BigPoster = ref(storage, `images/${doc.id}/BigPoster.png`);
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
