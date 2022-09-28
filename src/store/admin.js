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
    loadingAdmin: false,
  }),
  getters: {
    //поиск по строке в инпуте
    searchTable(state, val ) {
      return state.films.filter((p) =>
        p.name.toLowerCase().includes(val.toLowerCase())
      );
    },
  },
  mutations: {
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
              const poster = ref(storage, `images/${doc.id}/poster.png`);
              const BigPoster = ref(storage, `images/${doc.id}/BigPoster.png`);
              item.poster = await getDownloadURL(poster);
              item.BigPoster = await getDownloadURL(BigPoster);
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
        delete obj.val.poster;
        delete obj.val.BigPoster;

        await addDoc(collection(db, obj.to), {
          ...obj.val,
          genres:obj.genres,
        }).then((p) => {
          let docId = p._key.path.segments[1];

          const uploadTaskPicture = uploadBytesResumable(
            ref(storage, `images/${docId}/poster.png`),
            poster,
            metadata
          );
          const uploadTaskBigPicture = uploadBytesResumable(
            ref(storage, `images/${docId}/BigPoster.png`),
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
          const desertRef = ref(storage, `images/${obj.id}`);

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
