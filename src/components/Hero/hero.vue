<template lang="">
  <div
    :class="['w-full h-full bg-no-repeat bg-cover bg-center', hero_image_url]"
  >
    <div>{{ hero_image_url }}</div>
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
      console.log();
      return store.getters.getImageUrl;
      //   `bg-[url(${store.getters.getImageUrl})]`
    });
    return {
      hero_image_url,
    };
  },
};
</script>
<style lang=""></style>
