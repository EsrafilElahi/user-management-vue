<template>
  <div class="flex justify-center gap-3 mb-10">
    <RouterLink active-class="text-red-500" class="font-bold" to="/">USER</RouterLink> |
    <RouterLink active-class="text-red-500" class="font-bold" to="/users/add">ADD USER</RouterLink>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

console.log(router)
console.log(route.name)

watch(route, (to, from) => {
  console.log('Route changed:', to.path, '--->', from.path);
});


</script>

<style scoped></style>