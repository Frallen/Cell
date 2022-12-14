import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
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

let errorMessage = (componentContext) => {
  componentContext.$swal.fire({
    icon: "error",
    title: "Произошла ошибка",
  });
};

export const adminModule = {
  namespaced: true,
  state: () => ({
    genres: [],
    actors: [],
    films: [],
    news: [],
    searchFieldFilms: null,
    searchFieldActors: null,
    searchFieldGenres: null,
    searchFieldNews: null,
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
    }, //поиск по строке в инпуте, таблица актеров
    searchTableNews(state) {
      if (state.searchFieldNews) {
        return state.news.filter((p) =>
          p.name.toLowerCase().includes(state.searchFieldNews.toLowerCase())
        );
      } else {
        return state.news;
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
    setNewsQuery(state, query) {
      state.searchFieldNews = query;
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
        case "news": {
          return (state.news = data);
        }
      }
    },
  },
  actions: {
    async FetchData({ state, commit }, to, componentContext) {
      try {
        commit("setLoading", true);

        const { docs } = await getDocs(query(collection(db, to)));
        const data = await Promise.all(
          docs.map(async (doc) => ({
            ...doc.data(),
            id: doc.id,
            name: doc.data().name,
            slug: doc.data().slug,
            ...(to === "films" && {
              poster: await getDownloadURL(
                ref(storage, `images/films/${doc.id}/poster.png`)
              ),
            }),
            ...(to === "films" && {
              BigPoster: await getDownloadURL(
                ref(storage, `images/films/${doc.id}/BigPoster.png`)
              ),
            }),
            ...(to === "genres" && {
              genre: await getDownloadURL(
                ref(storage, `images/genres/${doc.id}/genre.png`)
              ),
            }),
            ...(to === "news" && {
              genre: await getDownloadURL(
                ref(storage, `images/news/${doc.id}/banner.png`)
              ),
            }),
            ...(to === "actors" && {
              photo: await getDownloadURL(
                ref(storage, `images/actors/${doc.id}/photo.png`)
              ),
            }),
          }))
        );
        commit("setData", { data, to });
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
    async CreateItem({ state, commit, dispatch }, obj,componentContext) {
      try {
        commit("setLoading", true);
        const metadata = {
          contentType: "image/jpeg",
        };
        let poster = obj.val.poster;
        let BigPoster = obj.val.BigPoster;
        let genre = obj.val.genre;
        let banner = obj.val.banner;
        let photo = obj.val.photo;
        delete obj.val.photo;
        delete obj.val.poster;
        delete obj.val.BigPoster;
        delete obj.val.genre;
        delete obj.val.banner;
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
          } else if (obj.to === "genres") {
            const uploadTaskPicture = uploadBytesResumable(
              ref(storage, `images/genres/${docId}/genre.png`),
              genre,
              metadata
            );
          } else if (obj.to === "actors") {
            const uploadTaskPicture = uploadBytesResumable(
              ref(storage, `images/actors/${docId}/photo.png`),
              photo,
              metadata
            );
          } else if (obj.to === "news") {
            const uploadTaskPicture = uploadBytesResumable(
              ref(storage, `images/news/${docId}/banner.png`),
              banner,
              metadata
            );
          }
        });
        dispatch("FetchData", obj.to);
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
    async updateDoc({ state, commit, dispatch }, obj,componentContext) {
      try {
        const metadata = {
          contentType: "image/jpeg",
        };

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
            // poster: obj.items.poster,
            // BipPoster: obj.items.BipPoster,
          });
        } else if (obj.items.poster) {
          dispatch("DeleteImages", obj);
          const uploadTaskPicture = uploadBytesResumable(
            ref(storage, `images/films/${obj.id}/poster.png`),
            obj.items.poster,
            metadata
          );
          const uploadTaskBigPicture = uploadBytesResumable(
            ref(storage, `images/films/${obj.id}/BigPoster.png`),
            obj.items.BigPoster,
            metadata
          );
        } else if (obj.items.banner) {
          dispatch("DeleteImages", obj);
          await updateDoc(docRef, {
            name: obj.items.name,
            slug: obj.items.slug,
            text: obj.items.text,
          });
          const uploadTaskPicture = uploadBytesResumable(
            ref(storage, `images/news/${obj.id}/banner.png`),
            obj.items.banner,
            metadata
          );
        } else if (obj.items.genre) {
          dispatch("DeleteImages", obj);
          const uploadTaskPicture = uploadBytesResumable(
            ref(storage, `images/genres/${obj.id}/genre.png`),
            obj.items.genre,
            metadata
          );
        } else if (obj.items.photo) {
          dispatch("DeleteImages", obj);
          await updateDoc(docRef, {
            name: obj.items.name,
            slug: obj.items.slug,
            text: obj.items.text,
          });
          const uploadTaskPicture = uploadBytesResumable(
            ref(storage, `images/actors/${obj.id}/photo.png`),
            obj.items.photo,
            metadata
          );
        } else {
          await updateDoc(docRef, {
            name: obj.items.name,
            slug: obj.items.slug,
          });
        }
        dispatch("FetchData", obj.to);
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
    async DeleteDoc({ state, commit, dispatch }, obj,componentContext) {
      try {
        commit("setLoading", true);

        await deleteDoc(doc(db, obj.to, obj.id));
        dispatch("DeleteImages", obj);
        dispatch("FetchData", obj.to);
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
    async DeleteImages({ state, commit, dispatch }, obj) {
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
      } else if (obj.to === "news") {
        const desertRef = ref(storage, `images/news/${obj.id}`);

        listAll(desertRef).then(async (listResults) => {
          const promises = listResults.items.map((item) => {
            return deleteObject(item);
          });

          await Promise.all(promises);
        });
      }
    },
  },
};
