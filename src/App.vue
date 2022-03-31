<template>
  <Navigation />
  <Hero />
  <Search />
  <Body />
  <div>{{ movieData }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, provide, ref, watch } from 'vue';
import Navigation from '../src/components/Navigation/navigation.vue';
import Hero from '../src/components/Hero/hero.vue';
import Search from '../src/components/Search/search.vue';
import Body from '../src/components/Body/body.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  components: { Navigation, Hero, Search, Body },
  setup() {
    const { dispatch } = useStore();
    onMounted(async () => {
      await dispatch('fetchMovieData');
    });
  },
});
</script>

<style></style>
