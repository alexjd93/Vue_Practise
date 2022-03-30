<template>
  <Navigation />
  <button @click="$store.dispatch('fetchMovieData')">Click</button>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, provide, ref, watch } from 'vue';
import Navigation from '../src/components/Navigation/navigation.vue';

import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  components: { Navigation },
  // mounted() {},
  // computed: {
  //   movieData() {
  //     const store = useStore();
  //     console.log(store.getters.getMovieContainer);
  //     return store.getters.getMovieContainer;
  //   },
  // },
  // mounted() {

  // },
});
</script>

<style></style>
