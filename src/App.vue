<template>
  <div>
    <input type="button" value="-" @click="minus" />
    {{ count }}
    <input type="button" value="+" @click="plus" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  computed: mapState(["count"]),
  methods: {
    minus() {
      this.$store.commit("minus");
    },
    plus() {
      this.$store.commit("plus");
    },
  },
};
</script>

<style></style>
