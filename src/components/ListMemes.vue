<template>
  <h1 class="title">{{ title }}</h1>
  <div class="total-show">
    <select>
      <option value="">All</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  </div>
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

    const memes = computed(() => {
      return store.state.memes;
    });

    onMounted(() => {
      store.dispatch("getMemes");
    });

    const changeTotalShow = (event) => {
      const val = event.target.value;
    };

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
.total-show {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
}
</style>
