import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { db, storage } from "../../firebase";

export const adminModule = {
  namespaced: true,
  state: () => ({
    genres: [],
    actors: [],
    films: [],
    users: [],
    searchFieldFilms: null,
    searchFieldActors: null,
    searchFieldGenres: null,
    loadingAdmin: false,
  }),
  getters: {
    //поиск по строке в инпуте, таблица фильмов
    searchTableFilms(state) {
      if (state.searchFieldFilms) {
        return state.films.filter((p) =>
          p.name.toLowerCase().includes(state.searchFieldFilms.toLowerCase())
        );
      } else {
        return state.films;
      }
    },
    //поиск по строке в инпуте, таблица актеров
    searchTableActors(state) {
      if (state.searchFieldActors) {
        return state.actors.filter((p) =>
          p.name.toLowerCase().includes(state.searchFieldActors.toLowerCase())
        );
      } else {
        return state.actors;
      }
    },
    //поиск по строке в инпуте, таблица актеров
    searchTableGenres(state) {
      if (state.searchFieldGenres) {
        return state.genres.filter((p) =>
          p.name.toLowerCase().includes(state.searchFieldGenres.toLowerCase())
        );
      } else {
        return state.genres;
      }
    },
  },
  mutations: {
    setFilmQuery(state, query) {
      state.searchFieldFilms = query;
    },
    setActorsQuery(state, query) {
      state.searchFieldActors = query;
    },
    setGenresQuery(state, query) {
      state.searchFieldGenres = query;
    },
    setLoading(state, loading) {
      state.loadingAdmin = loading;
    },
    setData(state, { data, to }) {
      switch (to) {
        case "genres": {
          return (state.genres = data);
        }
        case "actors": {
          return (state.actors = data);
        }
        case "films": {
          return (state.films = data);
        }
        case "users": {
          return (state.users = data);
        }
      }
    },
  },
  actions: {
    async FetchData({ state, commit }, to) {
      try {
        commit("setLoading", true);
        const q = query(collection(db, to));

        await onSnapshot(q, (querySnapshot) => {
          const allPromises = querySnapshot.docs.map(async (doc) => {
            let item = {
              id: doc.id,
              ...doc.data(),
            };

            if (to === "films") {
              const poster = ref(storage, `images/films/${doc.id}/poster.png`);
              const BigPoster = ref(
                storage,
                `images/films/${doc.id}/BigPoster.png`
              );
              item.poster = await getDownloadURL(poster);
              item.BigPoster = await getDownloadURL(BigPoster);
            } else if (to === "genres") {
              const genre = ref(storage, `images/genres/${doc.id}/genre.png`);
              item.genre = await getDownloadURL(genre);
            }
            return item;
          });
          Promise.all(allPromises).then((data) =>
            commit("setData", { data, to })
          );
          // .catch(console.error);
        });
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
    async CreateItem({ state, commit }, obj) {
      try {
        commit("setLoading", true);
        const metadata = {
          contentType: "image/jpeg",
        };
        let poster = obj.val.poster;
        let BigPoster = obj.val.BigPoster;
        let genre = obj.val.genre;
        delete obj.val.poster;
        delete obj.val.BigPoster;
        delete obj.val.genre;
        await addDoc(collection(db, obj.to), {
          ...obj.val,
          //если жанр существует то добавить объект жанров
          ...(obj.genres && { genres: obj.genres }),
        }).then((p) => {
          let docId = p._key.path.segments[1];
          if (obj.to === "films") {
            const uploadTaskPicture = uploadBytesResumable(
              ref(storage, `images/films/${docId}/poster.png`),
              poster,
              metadata
            );
            const uploadTaskBigPicture = uploadBytesResumable(
              ref(storage, `images/films/${docId}/BigPoster.png`),
              BigPoster,
              metadata
            );
            uploadTaskPicture.on(
              "state_changed",
              (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                /* const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');*/
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                console.error(error);
              },
              () => {}
            );
            uploadTaskBigPicture.on(
              "state_changed",
              (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                /* const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                 console.log('Upload is ' + progress + '% done');*/
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                console.error(error);
              },
              () => {}
            );
          } else if (obj.to === "genres") {
            const uploadTaskPicture = uploadBytesResumable(
              ref(storage, `images/genres/${docId}/genre.png`),
              genre,
              metadata
            );
            uploadTaskPicture.on(
              "state_changed",
              (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                /* const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');*/
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                console.error(error);
              },
              () => {}
            );
          }
        });
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
    async updateDoc({ state, commit }, obj) {
      try {
        commit("setLoading", true);
        let docRef = doc(db, obj.to, obj.id);
        if (obj.items.country) {
          await updateDoc(docRef, {
            name: obj.items.name,
            slug: obj.items.slug,
            text: obj.items.text,
            country: obj.items.country,
            duration: obj.items.duration,
            year: obj.items.year,
            video: obj.items.video,
            genres: obj.items.genres,
            actors: obj.items.actors,
            poster: obj.items.poster,
            BipPoster: obj.items.BipPoster,
          });
        } else {
          await updateDoc(docRef, {
            name: obj.items.name,
            slug: obj.items.slug,
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
    async DeleteDoc({ state, commit }, obj) {
      try {
        commit("setLoading", true);

        await deleteDoc(doc(db, obj.to, obj.id));
        if (obj.to === "films") {
          const desertRef = ref(storage, `images/films/${obj.id}`);

          listAll(desertRef).then(async (listResults) => {
            const promises = listResults.items.map((item) => {
              return deleteObject(item);
            });

            await Promise.all(promises);
          });
        } else if (obj.to === "genres") {
          const desertRef = ref(storage, `images/genres/${obj.id}`);

          listAll(desertRef).then(async (listResults) => {
            const promises = listResults.items.map((item) => {
              return deleteObject(item);
            });

            await Promise.all(promises);
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
  },
};
