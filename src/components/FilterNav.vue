<template>
  <div class="flex justify-center gap-3 mb-10">
    <RouterLink active-class="text-red-500" class="font-bold" to="/">USER</RouterLink> |
    <RouterLink active-class="text-red-500" class="font-bold" to="/users/add">ADD USER</RouterLink>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

watch(route, () => {
  return 0;
  // console.log('Route changed:', to.path, '--->', from.path);
});


</script>

<style scoped></style>