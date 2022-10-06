import {collection, doc, getDoc, getDocs, query} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";

export const newsModule = {
  namespaced: true,
  state: () => ({
    news: [],
    currentNews: {},
      isLoading: false,
  }),
  getters: {},
  mutations: {
    setNews(state, news) {
      state.news = news;
    },
    setCurrentNews(state, news) {
      state.currentNews = news;
    },
      setLoading(state, loading) {
      state.isLoading = loading;
    },
  },

  actions: {
    async FetchNews({ state, commit }) {
      try {
        commit("setLoading", true);

        const { docs } = await getDocs(query(collection(db, "news")));
        const data = await Promise.all(
          docs.map(async (doc) => ({
            ...doc.data(),
            id: doc.id,
            banner:
              (await getDownloadURL(
                ref(storage, `images/news/${doc.id}/banner.png`)
              )) ?? null,
          }))
        );

        commit("setNews", data);
      } catch (err) {
        console.error(err);
      } finally {
        commit("setLoading", false);
      }
    },
      async GetCurrentNews({ state, commit }, id) {
          try {
              commit("setLoading", true);
              const docs = await getDoc(doc(db, "news", id));
              let returnPoster = async () => {
                  return await getDownloadURL(
                      ref(storage, `images/news/${docs.id}/banner.png`)
                  );
              };

              const data = {
                  ...docs.data(),
                  id: docs.id,
                  banner: (await returnPoster()) ?? null,
              };

              commit("setCurrentNews", data);
          } catch (err) {
              console.error(err);
          } finally {
              commit("setLoading", false);
          }
      },
  },
};
