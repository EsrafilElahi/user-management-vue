<template>
  <div class="w-[80%] mx-auto">
    <span @click="router.back()" class="w-full text-left mb-6 cursor-pointer">back</span>

    <form class="mx-auto space-y-4 mt-5">
      <div class="flex items-center">
        <label for="userName" class="w-1/4 text-sm font-medium">userName:</label>
        <input type="text" id="userName" name="userName" v-model="userData.userName" required
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
import { reactive, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const BACKED_BASE_URI = ref('http://localhost:5000/users')

let userData = reactive({
  userName: '',
  job: '',
  role: '',
  city: ''
})

const handleGetUser = async () => {
  try {
    const res = await axios.get(`${BACKED_BASE_URI.value}/${route.query.id}`)
    Object.assign(userData, res.data) // merge new data to old data
  } catch (error) {
    console.log('err :', error)
  }
}

console.log('userData :', userData)

watchEffect(() => {
  handleGetUser()
}, [route.query.id])

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