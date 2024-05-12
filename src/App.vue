<template>
  <FilterNav />
  <UserItem item="{name: 'sdasda'}" />

  <RouterView />
</template>

<script setup>
import FilterNav from './components/FilterNav.vue';
import UserItem from './components/UserItem.vue';


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
