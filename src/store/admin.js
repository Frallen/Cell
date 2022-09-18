import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  deleteObject,
  getDownloadURL,
  listAll,
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
  getters: {},
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
          const data = [];

          querySnapshot.forEach((doc) => {
            // const poster=`gs://cell-11ef4.appspot.com/images/${doc.id}/poster.png`
            let url = async () => {
              let url;
              const starsRef = ref(storage, `images/${doc.id}/poster.png`);

              await getDownloadURL(starsRef).then((p) => {
                url = p;
              });

              return url;
            };

            let item = {
              id: doc.id,
              name: doc.data().name,
              slug: doc.data().slug,
              country: doc.data().country,
              duration: doc.data().duration,
              year: doc.data().year,
              video: doc.data().video,
              genres: doc.data().genres,
              actors: doc.data().actors,
             // poster: to === "films" ? url() : null,
              // BipPoster: url,
            };

            data.push(item);

            // Get the download URL
          });

          commit("setData", { data, to });
        });
      } catch (err) {
        console.log(err);
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
        }).then((p) => {
          let docId = p._key.path.segments[1];

          const uploadTaskPicture = uploadBytesResumable(
            ref(storage, `images/${docId}/poster.${poster.name.split(".")[1]}`),
            poster,
            metadata
          );
          const uploadTaskBigPicture = uploadBytesResumable(
            ref(
              storage,
              `images/${docId}/BigPoster.${BigPoster.name.split(".")[1]}`
            ),
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
              // A full list of error codes is available at
              // https://firebase.google.com/docs/storage/web/handle-errors
              switch (error.code) {
                case "storage/unauthorized":
                  // User doesn't have permission to access the object
                  break;
                case "storage/canceled":
                  // User canceled the upload
                  break;
                case "storage/unknown":
                  // Unknown error occurred, inspect error.serverResponse
                  break;
              }
            },
            () => {
              // Upload completed successfully, now we can get the download URL
              /*getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  console.log('File available at', downloadURL);
                });*/
            }
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
              // A full list of error codes is available at
              // https://firebase.google.com/docs/storage/web/handle-errors
              switch (error.code) {
                case "storage/unauthorized":
                  // User doesn't have permission to access the object
                  break;
                case "storage/canceled":
                  // User canceled the upload
                  break;
                case "storage/unknown":
                  // Unknown error occurred, inspect error.serverResponse
                  break;
              }
            },
            () => {
              // Upload completed successfully, now we can get the download URL
              /*getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  console.log('File available at', downloadURL);
                });*/
            }
          );
        });
      } catch (err) {
        console.log(err);
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
        commit("setLoading", false);
      } catch (e) {
        commit("setLoading", false);
        console.log(e);
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
        console.log(err);
        commit("setLoading", false);
      } finally {
        commit("setLoading", false);
      }
    },
  },
};
