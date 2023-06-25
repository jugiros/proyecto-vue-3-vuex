<template>
  <div class="meme">
    <p>{{meme.name}}</p>
    <img :src="meme.url">
  </div>
</template>

<script>
export default {
  name: "Meme",
  props: {
    meme: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.meme {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
}
.meme img {
  max-height: 200px;
  max-width: 200px;
}
</style>
