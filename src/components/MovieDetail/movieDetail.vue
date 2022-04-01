<template lang="">
  <Navigation />
  <Hero />
  <div class="container m-auto">
    <div
      class="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
    >
      <div v-for="(content, index) in actor" v-bind:key="index">
        <p>{{ content.name }}</p>
        <img w-full h-full :src="content.imagePath" />
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import Navigation from '../Navigation/navigation.vue';
import Hero from '../Hero/hero.vue';
import axios from 'axios';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
export default {
  name: 'MovieDetail',
  components: {
    Navigation,
    Hero,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const params = route.params;
    let actor = ref([]);
    store.commit('SET_HERO', params);
    onMounted(async () => {
      try {
        const { data } = await axios(
          `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=5a8bb8e67182bbdc1ccde74a5db2200b&language=en-US`
        );
        const cast = data.cast;
        console.log(cast);
        const newData = cast.map((data) => {
          const imagePath = `${IMAGE_BASE_URL}${POSTER_SIZE}${data.profile_path}`;
          data['imagePath'] = imagePath;
          console.log(data);
          return data;
        });
        console.log(newData);
        actor.value = newData;
      } catch (err) {
        console.log(err);
      }
    });
    return {
      actor,
    };
  },
};
//profile_path
</script>

<style lang=""></style>
