<template>
  <div class="w-[80%] mx-auto">
    <form class="mx-auto space-y-4 mt-5" @submit.prevent="handleSubmit">

      <div class="flex items-center">
        <label for="username" class="w-1/4 text-sm font-medium">Username:</label>
        <input type="text" id="username" name="username" v-model="userData.userName" required
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
      </div>

      <div class="flex items-center">
        <label for="job" class="w-1/4 text-sm font-medium">Job:</label>
        <select id="job" name="job" v-model="userData.job" required
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
          <option v-for="job in jobOptions" :key="job.value" :value="job.value">{{ job.label }}</option>
        </select>
      </div>

      <div class="flex items-center">
        <label for="role" class="w-1/4 text-sm font-medium">Role:</label>
        <select id="role" name="role" v-model="userData.role" required
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
          <option v-for="role in roleOptions" :key="role.value" :value="role.value">{{ role.label }}</option>
        </select>
      </div>

      <div class="flex items-center">
        <label for="city" class="w-1/4 text-sm font-medium">City:</label>
        <input type="text" id="city" name="city" v-model="userData.city" required
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
      </div>

      <button type="submit" class="btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const BACKED_BASE_URI = ref('http://localhost:5000/users')

const userData = reactive({
  userName: '',
  job: '',
  role: '',
  city: ''
})

console.log('userData :', userData)

const handleSubmit = async () => {
  try {
    const res = await axios.post(BACKED_BASE_URI.value, userData)
    if (res.status === 201) {
      router.back()
    }
  } catch (error) {
    console.log('err :', error)
  }
}


const jobOptions = ref([
  {
    value: 'frontend dev',
    label: 'frontend dev'
  },
  {
    value: 'backend dev',
    label: 'backend dev'
  },
  {
    value: 'devops dev',
    label: 'devops dev'
  },
  {
    value: 'QA dev',
    label: 'QA dev'
  },
])
const roleOptions = ref([
  {
    value: 'superAdmin',
    label: 'superAdmin'
  },
  {
    value: 'admin',
    label: 'admin'
  },
  {
    value: 'customer',
    label: 'customer'
  },
  {
    value: 'guest',
    label: 'guest'
  },
])

</script>

<style lang="scss" scoped></style>