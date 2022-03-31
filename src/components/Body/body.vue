<template lang="">
  <div class="container m-auto">
    <h1 class="title">Popular Movie</h1>
    <router-link to="/about">Go to About</router-link>
    <div
      class="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
    >
      <div v-for="(content, index) in movieData" v-bind:key="index">
        <img class="w-full h-full" :src="content.poster_url" alt="no image" />
        {{ content.title }}
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  name: 'BodyContent',
  setup() {
    const store = useStore();
    const movieData = computed(() => {
      console.log(store.state.data);
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
