<template>
  <div>
    <form @submit.prevent="onclick">
      <label for="isbn">ISBN:</label>
      <input type="text" id="isbn" v-model="isbn" /><br />
      <label for="title">署名:</label>
      <input type="text" id="title" v-model="title" /><br />
      <label for="price">価格:</label>
      <input type="number" id="price" v-model="price" /><br />
      <input type="submit" value="登録" />
    </form>
    <hr />
    <p>書籍は全部で{{ booksCount }}冊</p>
    <ul v-for="b of getBooksByPrice(2500)" :key="b.isbn">
      <li>
        {{ b.title }} ({{ b.price }}円) <br />
        ISBN: {{ b.isbn }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app",
  computed: mapGetters(["booksCount", "getBooksByPrice"]),
  data() {
    return {
      isbn: "",
      title: "",
      price: 0,
    };
  },
  methods: {
    onclick() {
      this.$store.commit({
        type: "addBook",
        book: {
          isbn: this.isbn,
          title: this.title,
          price: this.price,
        },
      });
    },
  },
};
</script>

<style></style>
