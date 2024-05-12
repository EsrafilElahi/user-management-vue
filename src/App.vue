<template>
  <FilterNav />
  <UserItem :item="obj" />

  <RouterView />
</template>

<script setup>
import { reactive } from 'vue';
import FilterNav from './components/FilterNav.vue';
import UserItem from './components/UserItem.vue';

const obj = reactive({
  userName: 'esrafil',
  job: 'frontend dev',
  city: 'tehran',
  role: 'superAdmin'
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
