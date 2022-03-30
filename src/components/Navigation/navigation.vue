<template lang="">
  <div class="body-bg-color">
    <div class="container m-auto">
      <div class="rmdb-header-content">
        <img class="w-2/12" src="../../assets/reactMovie_logo.png" />
        <img class="w-1/12" src="../../assets/tmdb_logo.png" />
      </div>
    </div>
  </div>
</template>
<script>
import {} from 'vue';
export default {
  name: 'Navigation-content',
};
</script>
<style scoped>
.rmdb-header-content {
  @apply flex p-6 justify-between;
}
</style>
