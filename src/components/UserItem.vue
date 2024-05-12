<template>
  <div class="user-box">
    <h3>
      <span class="font-bold">userName : </span>user 1
    </h3>
    <h3>
      <span class="font-bold">job : </span>frontend developer
    </h3>
    <h3>
      <span class="font-bold">role : </span>admin
    </h3>
    <h3>
      <span class="font-bold">city : </span>gonbad kavus
    </h3>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: Object
})

console.log('props :', props)



</script>

<style lang="scss" scoped></style>