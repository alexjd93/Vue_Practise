<template>
  <Navigation />
  <Hero />
  <button @click="$store.dispatch('fetchMovieData')">Click</button>
  <div>{{ movieData }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, provide, ref, watch } from 'vue';
import Navigation from '../src/components/Navigation/navigation.vue';
import Hero from '../src/components/Hero/hero.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  components: { Navigation, Hero },
  setup() {
    const { state, dispatch } = useStore();
    // const hero_image_url = computed(() => state.hero_image_url);
    onMounted(async () => {
      await dispatch('fetchMovieData');
    });
    // return {
    //   hero_image_url,
    // };
  },
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
