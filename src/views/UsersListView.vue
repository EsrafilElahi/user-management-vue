<template>
  <div>
    <UserItem :item="obj" />

  </div>
</template>

<script setup>
import { reactive } from 'vue';

import UserItem from '../components/UserItem.vue';

const obj = reactive({
  userName: 'esrafil',
  job: 'frontend dev',
  city: 'tehran',
  role: 'superAdmin'
})

</script>

<style lang="scss" scoped></style>