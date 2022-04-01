<template lang="">
  <div>
    <Navigation />
    <Hero />
    <Search />
    <Body />
  </div>
</template>
<script lang="">
import Navigation from '../Navigation/navigation.vue';
import Hero from '../Hero/hero.vue';
import Body from '../Body/body.vue';
import Search from '@/components/Search/search.vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
export default {
  name: 'HomePage',
  components: {
    Navigation,
    Hero,
    Body,
    Search,
  },
  setup() {
    const { dispatch } = useStore();
    onMounted(async () => {
      await dispatch('fetchMovieData');
    });
  },
};
</script>
<style lang=""></style>
