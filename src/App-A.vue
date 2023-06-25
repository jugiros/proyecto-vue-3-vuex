<template>
  <h1>Memes</h1>
  <h2>{{ $store.state.titleApp }}</h2>
  <h3>{{ store.state.titleApp }}</h3>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<style></style>
