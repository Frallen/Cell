import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import moment from "moment/moment";

export const newsModule = {
  namespaced: true,
  state: () => ({
    news: [],
    isLoading: false,
  }),
  getters: {
    GetCurrentNews: (state) => (id) => {
      return state.news.find((p) => p.slug === id);
    },
    //Если текущая дата между сроками публикации то новость будет показана
    timeFilteredNews(state) {
      return state.news.filter(
        (item) =>
          moment(moment()).isBetween(
            moment(item.date.start, "DD/MM/YYYY"),
            moment(item.date.end, "DD/MM/YYYY")
          ) && item
      );
    },
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
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
  },
};
