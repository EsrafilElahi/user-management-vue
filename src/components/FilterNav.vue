<template>
  <div class="flex justify-center gap-3 mb-10">
    <RouterLink to="/">USER</RouterLink> |
    <RouterLink to="/users/add">ADD USER</RouterLink>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

watch(route, (to, from) => {
  console.log('Route changed:', to.path, '--->', from.path);
});


</script>

<style scoped></style>