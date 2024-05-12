<template>
  <div class="flex flex-col gap-4">
    <div v-for="user in users" :key="user.id">
      <UserItem :item="user" @delete="handleDelete" @refetch="handleGetUers" />
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import axios from 'axios';
import UserItem from '../components/UserItem.vue';
const BACKED_BASE_URI = ref('http://localhost:5000/users')

const users = ref([]);

const handleGetUers = async () => {
  try {
    const res = await axios.get(BACKED_BASE_URI.value)
    if (res.status === 200) {
      users.value = res.data
    }
  } catch (error) {
    console.log('err :', error)
  }
}

const handleDelete = async (id) => {
  return await axios.delete(`${BACKED_BASE_URI.value}/${id}`)
}

onMounted(() => {
  console.log('mounted')
  return handleGetUers()
})

watchEffect(() => {
  console.log('watchEffect')
})

</script>

<style lang="scss" scoped></style>