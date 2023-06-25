<template>
  <h1>Memes</h1>
  <h2>{{ $store.state.titleApp }}</h2>
  <h3>{{ titleApp }}</h3>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    console.log(useStore().state.titleApp);
    return {
      ...store.state,
    };
  },
};
</script>

<style></style>
