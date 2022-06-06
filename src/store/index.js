import Vue from "vue";
import Vuex from "vuex";
import { ADD_BOOK } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, //本番環境では無効化する
  state: {
    name: "",
    books: [
      {
        isbn: "928-4343-363-2",
        title: "作って楽しむプログラミング",
        price: 2000,
      },
      {
        isbn: "928-43423-363-2",
        title: "作って楽しむプログラミング",
        price: 1000,
      },
      {
        isbn: "928-43343-363-2",
        title: "作って楽しむプログラミング",
        price: 2700,
      },
    ],
  },
  getters: {
    booksCount(state) {
      return state.books.length;
    },
    getBooksByPrice(state) {
      return (price) => {
        return state.books.filter((book) => book.price < price);
      };
    },
  },
  mutations: {
    minus(state) {
      state.count--;
    },
    plus(state) {
      state.count++;
    },
    [ADD_BOOK](state, payload) {
      state.books.push(payload.book);
    },
    updateName(state, name) {
      state.name = name;
    },
  },
  actions: {
    addAsync: ({ commit }, payload) => {
      setTimeout(function () {
        commit(ADD_BOOK, payload);
      }, 5000);
    },
  },
  modules: {},
});
