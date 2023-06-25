<template>
  <h1 class="title">{{ title }}</h1>
  <di class="row">
    <templeate class="col-3" v-for="meme in memes" :key="meme.id">
      <meme :meme="meme"></meme>
    </templeate>
  </di>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import Meme from "@/components/Meme.vue";

export default {
  name: "ListMemes",
  components: { Meme },
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

<style scoped>
.title {
  text-align: center;
}
</style>
