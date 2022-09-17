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
      commit("setLoading", true);
      const q = query(collection(db, to));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = [];

        querySnapshot.forEach((doc) => {
          let item = {
            id: doc.id,
            name: doc.data().name,
            slug: doc.data().slug,
            country: doc.data().country,
            duration: doc.data().duration,
            year: doc.data().year,
            video: doc.data().video,
            genres: doc.data().genres ?? null,
            actors: doc.data().actors ?? null,
          };
          data.push(item);
        });

        commit("setData", { data, to });
        commit("setLoading", false);
      });
    },
    async CreateItem({ state, commit }, obj) {
      commit("setLoading", true);
      await addDoc(collection(db, obj.to), {
        ...obj.val,
      })
        .then((p) => {
          commit("setLoading", false);
        })
        .catch((err) => {
          commit("setLoading", false);
          console.log(err);
        });
    },
    async updateDoc({ state, commit }, obj) {
      try {
        commit("setLoading", true);
        let docRef = doc(db, obj.to, obj.id);
        if(obj.items.country) {
          await updateDoc(docRef, {
            name: obj.items.name,
            slug: obj.items.slug,
            country:  obj.items.country,
             duration: obj.items.duration,
             year:  obj.items.year,
             video:  obj.items.video,
             genres: obj.items.genres ?? null,
             actors: obj.items.actors ?? null,
          });
        }else{
          await updateDoc(docRef, {
            name: obj.items.name,
            slug: obj.items.slug
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
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    },
  },
};
