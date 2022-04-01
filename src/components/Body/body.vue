<template lang="">
  <div class="container m-auto">
    <h1 class="title">Popular Movie</h1>
    <div
      class="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
    >
      <div v-for="(content, index) in movieData" v-bind:key="index">
        <router-link
          :to="{
            name: 'MovieDetail',
            params: { ...content },
          }"
        >
          <img class="w-full h-full" :src="content.poster_url" alt="no image" />
        </router-link>
        {{ content.title }}
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  name: 'BodyContent',
  setup() {
    const store = useStore();
    const movieData = computed(() => {
      return store.state.data;
    });
    return {
      movieData,
    };
  },
};
</script>
<style scoped lang="css">
.title {
  @apply text-3xl;
}
</style>
