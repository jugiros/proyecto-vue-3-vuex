<template>
  <h1>{{ title }}</h1>
  <p>{{ memes }}</p>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

export default {
  name: "ListMemes",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getMemes");
    });
    const memes = computed(() => {
      return store.state.memes;
    });
    return {
      title: store.state.titleApp,
      memes,
    };
  },
};
</script>

<style scoped></style>
