<template lang="">
  <div class="body-bg-color">
    <div class="container m-auto p-4">
      <input
        v-model="searchValue"
        v-on:input="fetchSearch"
        class="rounded-2xl bg-stone-800 p-4 relative h-20 w-full text-3xl"
      />
    </div>
    <p>{{ searchValue }}</p>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'Search-content',
  setup() {
    const store = useStore();
    const fetchSearch = async (event) => {
      const searchValue = event.target.value;
      store.dispatch('searchMovie', {
        searchValue,
      });
    };
    return {
      fetchSearch,
    };
  },
};
</script>
<style lang=""></style>
