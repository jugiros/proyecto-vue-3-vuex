<template>
  <div class="container">
    <list-memes></list-memes>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ListMemes from "@/components/ListMemes.vue";

export default defineComponent({
  components: {ListMemes}
})
</script>

<style></style>
