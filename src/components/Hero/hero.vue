<template lang="">
  <div class="w-full h-full h-128">
    <img
      class="w-full h-full object-cover"
      :src="hero_image_url"
      alt="no image"
    />
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'hero-content',
  props: {
    heroImage: String,
  },
  setup() {
    const store = useStore();
    const hero_image_url = computed(() => {
      const url = store.getters.getImageUrl;
      return url;
    });
    return {
      hero_image_url,
    };
  },
};
</script>
<style lang=""></style>
