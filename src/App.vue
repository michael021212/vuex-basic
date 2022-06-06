<template>
  <div>
    <form @submit.prevent="onclick()">
      <label for="name">氏名: </label>
      <input type="text" id="name" v-model="name" />
      <input type="submit" value="登録" />
    </form>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      },
    },
  },
  data() {
    return {
      isbn: "",
      title: "",
      price: 0,
    };
  },
  methods: {
    onclick() {
      this.$store.dispatch("addAsync", {
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
